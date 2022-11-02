import React, { MouseEventHandler} from 'react';
import styled from 'styled-components';

import { serverCamStreamUrl } from './url';

const StyledCameraList = styled.section`
  right: 0;
  bottom: 0;
  margin: 5px;
  background-color: var(--panel-background-color);
  border-radius: 30px;

& li {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: var(--btn-text-color);
  margin: 10px;
  width: 100px;
  height: 100px;
  background: var(--btn-back-color);
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.5s linear;
}

& li:active {
  color: rgb(52, 110, 187);
}

@media (max-width: 576px) {
  & li {
    width: 70px;
    height: 70px;
    font-size: 0.8em;
  }

  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }
}`;

interface PropsCameraList {
  changeURL: (url: string) => void;
}

const CameraList: React.FC<PropsCameraList> = ({ changeURL }) => {
  const handleClick: MouseEventHandler = (e) => {
    switch(e.currentTarget.textContent) {
    case 'Дорога': {
      changeURL(serverCamStreamUrl.Road);
      break;
    }
    case 'Гостиная': {
      changeURL(serverCamStreamUrl.LivingRoom);
      break;
    }
    }
  };

  return (
    <StyledCameraList>
      <ul>
        <li onClick={handleClick}>Дорога</li>
        <li onClick={handleClick}>Гостиная</li>
        <li onClick={handleClick}>Передний Двор</li>
      </ul>
    </StyledCameraList>
  );
};

export default CameraList;
