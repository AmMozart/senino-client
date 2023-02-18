import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const clickTransform = keyframes`
from {
  transform: scale(1);
}
40% {
  transform: scale(0.6);
}
to {
  transform: scale(1);
}
`;

const StyledClickAnimation = styled.div<{ animate: boolean }>`
  ${({ animate }) =>
    animate &&
    css`
      animation: ${clickTransform} 0.3s ease-out;
    `}
`;

interface ClickAnimationProps {
  children: React.ReactNode;
}

const ClickAnimation: React.FC<ClickAnimationProps> = ({ children }) => {
  const [isAnimate, setIsAnimate] = useState(false);

  const startAnimation = () => {
    setIsAnimate(true);
  };

  const handleClick = () => {
    startAnimation();
  };

  const stopAnimation = () => {
    setIsAnimate(false);
  };

  return (
    <StyledClickAnimation
      animate={isAnimate}
      onClick={handleClick}
      onAnimationEnd={stopAnimation}
    >
      {children}
    </StyledClickAnimation>
  );
};

export default ClickAnimation;
