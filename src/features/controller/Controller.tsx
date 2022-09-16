import React, { useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ControllerCommand from './ControllerCommand';
import { Connection } from './Connection';
import { currentTimerCommand, setAllTimers, timers } from '../timer/timerSlice';
import { isConnect,
  setConnectionState,
  setElectricGroupsState,
  electricGroupsState,
  ElectricGroupsState,
  currentElectricGroupCommand
} from './controllerSlice';
import { PORT, SERVER_IP } from '../../config/var';

export const Controller: React.FC = () => {
  const dispatch = useAppDispatch();

  const connect = useAppSelector(isConnect);
  // const groupsState = useAppSelector(electricGroupsState);
  const myCurrentelectricGroupCommand = useAppSelector(currentElectricGroupCommand);
  const allTimers = useAppSelector(timers);
  const myCurrentTimerCommand = useAppSelector(currentTimerCommand);

  const socket = useRef<WebSocket>();
  const ref = useRef<ElectricGroupsState>();

  useEffect(() => {
    const connect = () => {
      socket.current = new WebSocket(`wss://${SERVER_IP}:${PORT}`);

      socket.current.onopen = () => {
        dispatch(setConnectionState(true));
      };

      socket.current.onmessage = (event) => {
        const receive = JSON.parse(event.data);
        
        for(const key in receive) {
          switch (key) {
          case 'electricGroup': {
            dispatch(setElectricGroupsState(receive[key]));
            break;
          }
          case 'timers': {
            dispatch(setAllTimers(receive[key]));
            break;
          }
          default:
            throw new Error(`'${event.data.constructor.name}' type of message receive is not handle. data is ${event.data}`);
          }
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
    };

    connect();
  }, [dispatch]);

  useEffect(() => {
    if (socket.current?.readyState === 1)
      for (const key in myCurrentelectricGroupCommand) {
        console.log('command:', myCurrentelectricGroupCommand);
        const data = JSON.stringify(
          {
            command: ControllerCommand.LoadControl,
            payload: {[key]: myCurrentelectricGroupCommand[key]}
          });

        socket.current.send(data);
      }
    ref.current = myCurrentelectricGroupCommand;
  }, [myCurrentelectricGroupCommand]);

  useEffect(() => {
    if (socket.current && connect)
      socket.current.send(JSON.stringify({command: ControllerCommand.GetState}));
  }, [connect]);

  // useEffect(() => {
  //   if (socket.current?.readyState === 1)
  //     socket.current.send(JSON.stringify({command: ControllerCommand.SetTimers, payload: allTimers}));
  // }, [allTimers]);

  useEffect(() => {
    if (socket.current?.readyState === 1)
      socket.current.send(JSON.stringify({command: ControllerCommand.SetTimers, payload: myCurrentTimerCommand}));
  }, [myCurrentTimerCommand]);

  return <Connection isConnect={connect}/>;
};
