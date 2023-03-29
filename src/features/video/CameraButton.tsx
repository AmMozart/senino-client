import React from 'react';
import styled, { css } from 'styled-components';

const StyledCameraButton = styled.li`
  cursor: pointer;
  ${({ isChecked }: Pick<CameraButtonProps, 'isChecked'>) => css`
    color: ${isChecked ? 'white' : '#b7b7b7'};
    background: ${isChecked
      ? 'linear-gradient(0deg, black, rgb(0 164 49))'
      : 'linear-gradient(0deg, black, rgb(81, 81, 81))'};
  `};

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  width: 120px;
  height: 60px;
  font-size: 12px;
  transition: color 0.3s linear, background-image 0.3s linear;
  box-shadow: rgb(57, 57, 57) 0px 1px;
  border: 1px solid rgb(16, 16, 16);
  border-radius: 20px;
  text-align: center;

  @media (max-width: 576px) {
    width: 100px;
    height: 60px;
    font-size: 0.6em;
  }
`;

interface CameraButtonProps {
  name: string;
  isChecked: boolean;
  onClick: () => void;
}

const CameraButton: React.FC<CameraButtonProps> = ({
  name,
  isChecked,
  onClick,
}) => (
  <StyledCameraButton isChecked={isChecked} onClick={onClick}>
    {name}
  </StyledCameraButton>
);

export default CameraButton;
