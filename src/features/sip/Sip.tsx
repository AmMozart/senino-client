import React from 'react';
import styled from 'styled-components';
import {
  faPhone,
  faPhoneSlash,
  faLockOpen,
  faXmark,
  faGripVertical,
} from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import StyledPage from '../styles/StyledPage';
import StyledTitle from '../styles/StyledTitle';

import NumPad from './NumPad';
import SipButton from './SipButton';
import {
  answerCall,
  openDoor,
  rejectCall,
  showMenu,
  toggleMenu,
} from './sipSlice';

const StyledSipPage = styled(StyledPage)<{ isShowPhone: boolean }>`
  display: grid;
  grid-template-rows: 0.7fr 6fr 1fr;
  grid-template-columns: 3fr 1fr;
  justify-items: center;

  & .title {
    grid-column: 1 / 3;
  }

  & .canvas {
    box-sizing: border-box;
    width: 95%;
    height: 100%;

    background: linear-gradient(0deg, #000, #1e1e1e);
    border: 1px solid #424242;
    border-radius: 40px;
  }

  & .control {
    display: flex;
    align-content: center;
    justify-content: space-evenly;
  }

  & .num-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 100%;
  }

  & .answer,
  .end,
  .open {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  & .menu {
    display: none;
  }

  @media (max-width: 840px) {
    grid-template-columns: 4fr 1fr;

    & .menu {
      display: block;
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      width: 80px;
    }

    & .canvas {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    & .control {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    & .num-panel {
      position: absolute;
      right: 0;

      display: ${({ isShowPhone }) => (isShowPhone ? 'flex' : 'none')};

      width: 220px;
      height: 430px;
    }
  }

  @media (max-width: 400px) {
    & .menu {
      width: 60px;
    }
  }
`;

const Sip = () => {
  const isShowMenu = useAppSelector(showMenu);
  const dispatch = useAppDispatch();

  const showHideMenu = () => {
    dispatch(toggleMenu());
  };

  const answer = () => {
    dispatch(answerCall());
  };

  const reject = () => {
    dispatch(rejectCall());
  };

  const open = () => {
    dispatch(openDoor());
  };

  const menuIcon = isShowMenu ? faXmark : faGripVertical;

  return (
    <StyledSipPage isShowPhone={isShowMenu}>
      <StyledTitle className={'title'}>Домофон</StyledTitle>
      <canvas className={'canvas'}>Error</canvas>
      <NumPad className={'num-panel'} />

      <section className={'control'}>
        <SipButton
          icon={faPhone}
          title={'Ответить'}
          color={'green'}
          onClick={answer}
        />
        <SipButton
          icon={faPhoneSlash}
          title={'Завершить'}
          color={'red'}
          onClick={reject}
        />
        <SipButton
          icon={faLockOpen}
          title={'Открыть Калитку'}
          color={'blue'}
          onClick={open}
        />
      </section>

      <SipButton className={'menu'} icon={menuIcon} onClick={showHideMenu} />
    </StyledSipPage>
  );
};

export default Sip;
