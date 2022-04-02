import classNames from 'classnames';
import React from 'react';

import style from './BoilerPower.module.css';

interface SlideButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const SlideButton: React.FC<SlideButtonProps> = ({isActive, onClick}) => {

  const buttonStyle = classNames({
    [style.button]: true,
    [style.onButton]: isActive,
    [style.offButton]: !isActive,
  });

  const backgroundStyle = classNames({
    [style.background]: true,
    [style.onBackground]: isActive,
    [style.offBackground]: !isActive,
  });

  const value = isActive ? 'Вкл' : 'Выкл';

  return (
    <div className={backgroundStyle} onClick={onClick}>
      <button className={buttonStyle}>{value}</button>
    </div>
  );
};

export default SlideButton;
