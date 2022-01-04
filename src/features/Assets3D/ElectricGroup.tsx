import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import EventName from '../../utils/EventName';
import pubSub from '../../utils/pubSub';
import { electricGroupsState, setToggleValue } from '../controller/controllerSlice';

const ElectricGroup: React.FC = () => {
  const dispatch = useAppDispatch();
  const groupsState = useAppSelector(electricGroupsState);

  useEffect(() => {
    pubSub.subscribe(EventName.ClickOnElectricGroup, (name: string) => {
      dispatch(setToggleValue({ name }));
    });
  }, [dispatch]);

  useEffect(() => {
    pubSub.publish(EventName.ChangeState, groupsState);
  }, [groupsState]);

  return null;
};

export default ElectricGroup;
