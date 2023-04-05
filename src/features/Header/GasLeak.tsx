import React from 'react';
import styled from 'styled-components';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

const StyledGasLeak = styled(StyledStatusButton)`
  font-size: 1em;
`;

interface GasLeakProps {
  isGasLeak?: boolean;
}

const GasLeak: React.FC<GasLeakProps> = ({ isGasLeak = false }) => {
  return (
    <StyledGasLeak>
      <WarningAnimation isWarning={isGasLeak}>GAS</WarningAnimation>
    </StyledGasLeak>
  );
};

export default React.memo(GasLeak);
