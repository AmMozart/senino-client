import React from 'react';
import styled from 'styled-components';

const StyledSlideButton = styled.section`
  & div {
    --size: 80px;
    position: relative;
    width: calc(var(--size) * 2);
    height: var(--size);
    border-radius: calc(var(--size) / 2);
    transition: all 0.5s linear;
    background: ${(props: { isActive: boolean }) =>
      props.isActive ? '#5591eb' : '#a1a1a1'};
  }

  & button {
    position: absolute;
    left: ${(props: { isActive: boolean }) =>
      props.isActive ? 'var(--size)' : '0'};
    width: var(--size);
    height: var(--size);
    background: radial-gradient(transparent, #fff);
    border: 2px solid var(--panel-background-color);
    border-radius: 50%;
    color: #505050;
    font-size: 1.2em;
    transition: all 0.5s ease-out;
  }

  @media (max-height: 576px) {
    --size: 40px;
  }
`;

interface SlideButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const SlideButton: React.FC<SlideButtonProps> = ({ isActive, onClick }) => {
  const value = isActive ? 'Вкл' : 'Выкл';

  return (
    <StyledSlideButton isActive={isActive} onClick={onClick}>
      <div>
        <button>{value}</button>
      </div>
    </StyledSlideButton>
  );
};

export default SlideButton;
