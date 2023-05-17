import {
  faTemperatureLow,
  faPersonBooth,
  faDroplet,
  faFan,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isOpen, close } from '../../features/systemPanel/systemSlice';

const StyledSystemPanel = styled.section<{ isOpen: boolean }>`
  --size: 300px;
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-template-rows: 2fr 1fr 1fr 1fr 2fr;
  grid-template-areas:
    ' . . top . close'
    '. center center center .'
    'left center center center right'
    '. center center center .'
    '. . bottom . .';
  position: absolute;
  left: calc((100% - var(--size)) / 2);
  top: 30%;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: linear-gradient(45deg, black, rgb(68 68 68));
  box-shadow: 0 0 20px #000;
  opacity: 0.85;
  border: 3px solid rgb(32 32 32);

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: #00ebff;
    cursor: pointer;
  }

  & .climate {
    grid-area: top;
  }

  & .blind {
    grid-area: left;
  }

  & .water {
    grid-area: right;
  }

  & .vent {
    grid-area: bottom;
  }

  & .close {
    grid-area: close;
    justify-self: end;
    cursor: pointer;
    color: #3b3b3b;
  }

  & .scene {
    grid-area: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #000;
    box-shadow: 0px 0px 20px #00ebff;
    color: #898989;
    border: 2px solid #2c2c2c;
  }
`;

interface SystemPanelProps {
  room: string;
}

const SystemPanel: React.FC<SystemPanelProps> = ({ room }) => {
  const isOpenPanel = useAppSelector(isOpen);
  const dispatch = useAppDispatch();

  const closeModal: React.MouseEventHandler<SVGSVGElement> = () => {
    dispatch(close());
  };

  return (
    <StyledSystemPanel isOpen={isOpenPanel}>
      <FontAwesomeIcon
        className='close'
        icon={faXmark}
        size='3x'
        onClick={closeModal}
      />
      <div className='scene'>{room}</div>
      <div className='climate'>
        <FontAwesomeIcon icon={faTemperatureLow} />
      </div>
      <div className='blind'>
        <FontAwesomeIcon icon={faPersonBooth} />
      </div>
      <div className='water'>
        <FontAwesomeIcon icon={faDroplet} />
      </div>
      <div className='vent'>
        <FontAwesomeIcon icon={faFan} />
      </div>
    </StyledSystemPanel>
  );
};

export default SystemPanel;
