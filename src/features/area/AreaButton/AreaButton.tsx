import React, { MouseEventHandler, useCallback } from 'react';
import classNames from 'classnames';

import { useAppDispatch } from '../../../app/hooks';
import { change } from '../areaSlice';
import AreaName from '../AreaName';
import style from './AreaButton.module.css';

interface AreaButtonProps {
  name: AreaName;
  isActive?: boolean;
}

const AreaButton: React.FC<AreaButtonProps> = ({ name, isActive = false}) => {
  const dispatch = useAppDispatch();

  const changeArea: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(change(name));
  }, [dispatch, name]);

  const btnClass = classNames({
    [style.button]: true,
    [style.active]: isActive,
  });

  return <button className={btnClass} onClick={changeArea}>{name}</button>;
};

export default React.memo(AreaButton);
