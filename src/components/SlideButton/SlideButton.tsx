import React from 'react';
import styled from 'styled-components';

const StyledSlideButton = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 180px;
    height: 60px;
    margin: 0 10px;

    color: rgb(208 208 208);

    background: ${({ isActive }: Pick<SlideButtonProps, 'isActive'>) =>
      isActive
        ? 'linear-gradient(0deg, black, rgb(0, 164, 49))'
        : 'linear-gradient(0deg, black, rgb(81, 81, 81))'};
    border: 1px solid rgb(16 16 16);
    border-radius: 20px;
    box-shadow: rgb(57 57 57) 0 1px;

    transition: all 0.5s ease-out;
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
