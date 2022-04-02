import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './AddTimerButton.module.css';

interface AddTimerButtonProps {
  onClick: () => void;
}

const AddTimerButton: React.FC<AddTimerButtonProps> = ({onClick}) => {
  return (
    <div className={style.add} onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default AddTimerButton;
