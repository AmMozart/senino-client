import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import SlideButton from '../SlideButton';
import {
  electricGroupsState,
  setToggleValue,
} from '../../features/controller/controllerSlice';

interface SwitchButtonProps {
  electricGroupName: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ electricGroupName }) => {
  const groupsState = useAppSelector(electricGroupsState);
  const dispatch = useAppDispatch();

  const oneGroupState = groupsState[electricGroupName];
  const isGroupActive = oneGroupState ? true : false;

  const handleClick = () => {
    dispatch(setToggleValue({ name: electricGroupName }));
  };

  return <SlideButton isActive={isGroupActive} onClick={handleClick} />;
};

export default SwitchButton;
