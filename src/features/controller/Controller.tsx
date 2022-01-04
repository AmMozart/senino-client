import React, { useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ControllerCommand from './ControllerCommand';
import { Connection } from './Connection';
import { isConnect,
  setConnectionState,
  setElectricGroupsState,
  electricGroupsState,
  ElectricGroupsState
} from './controllerSlice';

const BOARD_IP = '192.168.1.200';

export const Controller: React.FC = () => {
  const socket = useRef<WebSocket>();
  const dispatch = useAppDispatch();
  const connect = useAppSelector(isConnect);
  const groupsState = useAppSelector(electricGroupsState);
  const ref = useRef<ElectricGroupsState>();

  useEffect(() => {
    const changeElectricGroupsState = (electricGroupsState: ElectricGroupsState): void => {
      dispatch(setElectricGroupsState(electricGroupsState));
    };

    const connect = () => {
      fetch(`https://${BOARD_IP}/uri`)
        .then(() => {
          socket.current = new WebSocket(`wss://${BOARD_IP}/ws`);

          socket.current.onopen = () => {
            dispatch(setConnectionState(true));
          };

          socket.current.onmessage = (event) => {
            console.log(event.data);
            switch (event.data.constructor.name) {
            case 'String': {
              changeElectricGroupsState(JSON.parse(event.data));
              break;
            }
            default:
              throw new Error(`'${event.data.constructor.name}' type of message receive is not handle. data is ${event.data}`);
            }
          };

          socket.current.onclose = event => {
            if (event.wasClean) {
              console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
            } else {
              console.log(`[close] Соединение прервано, код=${event.code} причина=${event.reason}`);
            }
            dispatch(setConnectionState(false));
            setTimeout(() => { connect(); }, 10000);
          };

          socket.current.onerror = (error) => {
            console.log(`[error] ${error}`);
            dispatch(setConnectionState(false));
            setTimeout(() => { connect(); }, 10000);
          };
        })
        .catch((e) => {
          console.log('Error GET request: ', e);
          setTimeout(() => { connect(); }, 10000);
          dispatch(setConnectionState(false));
        });
    };

    connect();
  }, [dispatch]);

  

  useEffect(() => {
    if (socket.current?.readyState === 1)
      for (const key in groupsState) {
        if (groupsState[key] !== (ref.current ? ref.current[key] : null)) {
          socket.current.send(`${key} ${groupsState[key]}`);
        }
      }
    ref.current = groupsState;

  }, [groupsState]);

  useEffect(() => {
    if (socket.current && connect)
      socket.current.send(ControllerCommand.GetState);
  }, [connect]);

  return <Connection isConnect={connect}/>;
};
