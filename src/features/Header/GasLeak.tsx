import React from 'react';
import styled, { css } from 'styled-components';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

const StyledGasLeak = styled(StyledStatusButton)<{ isGasLeak: boolean }>`
  font-size: 1em;

  ${({ isGasLeak }) =>
    isGasLeak &&
    css`
      background: linear-gradient(0deg, #110000, rgb(210 0 0));
    `}
`;

interface GasLeakProps {
  isGasLeak?: boolean;
}

const GasLeak: React.FC<GasLeakProps> = ({ isGasLeak = false }) => {
  return (
    <StyledGasLeak isGasLeak={isGasLeak}>
      <WarningAnimation isWarning={isGasLeak}>GAS</WarningAnimation>
    </StyledGasLeak>
  );
};

export default React.memo(GasLeak);
