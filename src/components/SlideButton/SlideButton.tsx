import React from 'react';
import styled from 'styled-components';

const StyledSlideButton = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    transition: all 0.5s ease-out;

    cursor: pointer;
    margin: 0px 10px;
    box-shadow: rgb(57, 57, 57) 0px 1px;
    border: 1px solid rgb(16, 16, 16);
    width: 180px;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;

    background: ${({ isActive }: Pick<SlideButtonProps, 'isActive'>) =>
      isActive
        ? 'linear-gradient(0deg, black, rgb(0, 164, 49))'
        : 'linear-gradient(0deg, black, rgb(81, 81, 81))'};
    color: rgb(208, 208, 208);
  }

  @media (max-height: 576px) {
    width: 100px;
  }
`;

interface SlideButtonProps {
  title?: string;
  isActive: boolean;
  onClick: () => void;
}

const SlideButton: React.FC<SlideButtonProps> = ({
  isActive,
  onClick,
  title,
}) => {
  const value = isActive ? 'Включен' : 'Выключен';

  return (
    <StyledSlideButton isActive={isActive} onClick={onClick}>
      <span>{title}</span>
      <button>{value}</button>
    </StyledSlideButton>
  );
};

export default SlideButton;
