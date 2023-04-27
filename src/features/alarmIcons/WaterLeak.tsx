import { faTint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import StyledStatusButton from '../styles/StyledStatusButton';
import WarningAnimation from '../styles/WarningAnimation';

interface WaterLeakProps {
  isLeak?: boolean;
}

const WaterLeak: React.FunctionComponent<WaterLeakProps> = ({
  isLeak = false,
}) => {
  return (
    <StyledStatusButton>
      <WarningAnimation isWarning={isLeak}>
        <FontAwesomeIcon icon={faTint} />
      </WarningAnimation>
    </StyledStatusButton>
  );
};

export default React.memo(WaterLeak);
