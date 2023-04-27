import React, { useEffect, useRef } from 'react';

import ControllerCommand from './ControllerCommand';

import {
  isConnect,
  setConnectionState,
  setElectricGroupsState,
  ElectricGroupsState,
  currentElectricGroupCommand,
} from './controllerSlice';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PORT, SERVER_IP } from '../../config/var';
import { Connection } from '../Header/Connection';
import {
  currentActiveScriptsCommand,
  setAllScripts,
} from '../script/scriptSlice';
import { clearLogCommand, setLog } from '../settings/settingsSlice';
import { currentTimerCommand, setAllTimers } from '../timer/timerSlice';

export const Controller: React.FC = () => {
  const dispatch = useAppDispatch();

  const connect = useAppSelector(isConnect);
  const myCurrentElectricGroupCommand = useAppSelector(
    currentElectricGroupCommand
  );
  const myCurrentTimerCommand = useAppSelector(currentTimerCommand);
  const myClearLogCommand = useAppSelector(clearLogCommand);
  const myCurrentActiveScriptsCommand = useAppSelector(
    currentActiveScriptsCommand
  );

  const socket = useRef<WebSocket>();
  const ref = useRef<ElectricGroupsState>();
  const intervalID = useRef<any>();

  let connectWss: () => void;

  useEffect(() => {
    connectWss = () => {
      socket.current = new WebSocket(`wss://${SERVER_IP}:${PORT}`);

      socket.current.onopen = () => {
        dispatch(setConnectionState(true));
      };

      socket.current.onmessage = (event) => {
        const receive = JSON.parse(event.data);

        for (const key in receive) {
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
            case 'scripts': {
              dispatch(setAllScripts(receive[key]));
              break;
            }
            default:
              throw new Error(
                `'${event.data.constructor.name}' type of message receive is not handle. data is ${event.data}`
              );
          }
        }
      };

      socket.current.onclose = (event) => {
        if (event.wasClean) {
          console.log(
            `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
          );
        } else {
          console.log(
            `[close] Соединение прервано, код=${event.code} причина=${event.reason}`
          );
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
      for (const key in myCurrentElectricGroupCommand) {
        console.log('command:', myCurrentElectricGroupCommand);
        const data = JSON.stringify({
          command: ControllerCommand.LoadControl,
          payload: { [key]: myCurrentElectricGroupCommand[key] },
        });

        socket.current.send(data);
      }
    ref.current = myCurrentElectricGroupCommand;
  }, [myCurrentElectricGroupCommand]);

  useEffect(() => {
    if (socket.current && connect) {
      socket.current.send(
        JSON.stringify({ command: ControllerCommand.GetState })
      );
    }

    if (connect) {
      clearInterval(intervalID.current);
    } else {
      intervalID.current = setInterval(() => {
        connectWss();
      }, 10000);
    }
  }, [connect]);

  useEffect(() => {
    if (socket.current?.readyState === 1)
      socket.current.send(
        JSON.stringify({
          command: ControllerCommand.SetTimers,
          payload: myCurrentTimerCommand,
        })
      );
  }, [myCurrentTimerCommand]);

  useEffect(() => {
    if (socket.current?.readyState === 1)
      socket.current.send(
        JSON.stringify({
          command: ControllerCommand.SetScripts,
          payload: myCurrentActiveScriptsCommand,
        })
      );
  }, [myCurrentActiveScriptsCommand]);

  useEffect(() => {
    if (socket.current?.readyState === 1)
      socket.current.send(
        JSON.stringify({
          command: ControllerCommand.ClearLog,
          payload: myClearLogCommand,
        })
      );
  }, [myClearLogCommand]);

  return <Connection isConnect={connect} />;
};
