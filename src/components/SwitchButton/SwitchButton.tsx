import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  electricGroupsState,
  setToggleValue,
} from '../../features/controller/controllerSlice';
import SlideButton from '../SlideButton';

interface SwitchButtonProps {
  title?: string;
  electricGroupName: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  electricGroupName,
  title,
}) => {
  const groupsState = useAppSelector(electricGroupsState);
  const dispatch = useAppDispatch();

  const oneGroupState = groupsState[electricGroupName];
  const isGroupActive = oneGroupState ? true : false;

  const handleClick = () => {
    dispatch(setToggleValue({ name: electricGroupName }));
  };

  return (
    <SlideButton title={title} isActive={isGroupActive} onClick={handleClick} />
  );
};

export default SwitchButton;
