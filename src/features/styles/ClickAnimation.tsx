import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const clickTransform = keyframes`
from {
  transform: scale(1);
}
50% {
  transform: scale(0.7);
}
to {
  transform: scale(1);
}
`;

const StyledClickAnimation = styled.div`
  animation: ${clickTransform} 0.3s ease-in-out;
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
    <div onClick={handleClick} onAnimationEnd={stopAnimation}>
      {isAnimate ? (
        <StyledClickAnimation>{children}</StyledClickAnimation>
      ) : (
        children
      )}
    </div>
  );
};

export default ClickAnimation;
