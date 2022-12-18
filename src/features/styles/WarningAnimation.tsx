import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const warning = keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const StyledWarningAnimation = styled.div`
  ${(props: { isWarning: boolean }) =>
    props.isWarning &&
    css`
      animation: ${warning} 1.5s infinite ease;
    `}
`;

interface WarningAnimationProps {
  isWarning: boolean;
  children: React.ReactNode;
}

const WarningAnimation: React.FC<WarningAnimationProps> = ({
  isWarning,
  children,
}) => {
  return (
    <StyledWarningAnimation isWarning={isWarning}>
      {children}
    </StyledWarningAnimation>
  );
};

export default WarningAnimation;
