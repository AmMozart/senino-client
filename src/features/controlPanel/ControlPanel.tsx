import * as React from 'react';

import AreaPanel from '../area/AreaPanel';
import AreaName from '../area/AreaName';
import SipIcon from '../sip/SipIcon';
import styled from 'styled-components';

const StyledLeftPanel = styled.section`
  position: fixed;
  bottom: 50px;
  left: 20px;

  @media (max-width: 576px) {
    bottom: 100px;
  }
`;

export const ControlPanel = (): JSX.Element => {
  const areas = Object.values(AreaName);

  return (
    <>
      <StyledLeftPanel>
        <SipIcon />
      </StyledLeftPanel>
      <AreaPanel areas={areas} />
    </>
  );
};
