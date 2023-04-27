import * as React from 'react';

import styled from 'styled-components';

import AreaName from '../area/AreaName';
import AreaPanel from '../area/AreaPanel';
import SipIcon from '../sip/SipIcon';

const StyledLeftPanel = styled.section`
  position: fixed;
  bottom: 50px;
  left: 20px;

  @media (max-width: 576px) {
    bottom: 110px;
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
