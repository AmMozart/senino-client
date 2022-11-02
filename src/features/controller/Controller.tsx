import React, { useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ControllerCommand from './ControllerCommand';
import { Connection } from '../Header/Connection';
import { currentTimerCommand, setAllTimers} from '../timer/timerSlice';
import { isConnect,
  setConnectionState,
  setElectricGroupsState,
  ElectricGroupsState,
  currentElectricGroupCommand
} from './controllerSlice';
import { PORT, SERVER_IP } from '../../config/var';
import { clearLogCommand, setLog } from '../settings/settingsSlice';

export const Controller: React.FC = () => {
  const dispatch = useAppDispatch();

  const connect = useAppSelector(isConnect);
  const myCurrentelectricGroupCommand = useAppSelector(currentElectricGroupCommand);
  const myCurrentTimerCommand = useAppSelector(currentTimerCommand);
  const myClearLogCommand = useAppSelector(clearLogCommand);

  const socket = useRef<WebSocket>();
  const ref = useRef<ElectricGroupsState>();

  let connectWss: () => void;

  useEffect(() => {
    connectWss = () => {
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
          case 'logs': {
            dispatch(setLog(receive[key]));
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
      };

      socket.current.onerror = (error) => {
        console.log(`[error] ${error}`);
        dispatch(setConnectionState(false));
      };
    };

    connectWss();
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

  let id: any;

  useEffect(() => {
    if (socket.current && connect) {
      socket.current.send(JSON.stringify({command: ControllerCommand.GetState}));
    }

    if(connect) {
      clearInterval(id);
    } else {
      id = setInterval(() => { connectWss(); }, 10000);
    }
  }, [connect]);

  // useEffect(() => {
  //   if (socket.current?.readyState === 1)
  //     socket.current.send(JSON.stringify({command: ControllerCommand.SetTimers, payload: allTimers}));
  // }, [allTimers]);

  useEffect(() => {
    if (socket.current?.readyState === 1)
      socket.current.send(JSON.stringify({command: ControllerCommand.SetTimers, payload: myCurrentTimerCommand}));
  }, [myCurrentTimerCommand]);

  useEffect(() => {
    if (socket.current?.readyState === 1)
      socket.current.send(JSON.stringify({command: ControllerCommand.ClearLog, payload: myClearLogCommand}));
  }, [myClearLogCommand]);

  return <Connection isConnect={connect}/>;
};
