import React from 'react';
import styled from 'styled-components';

const StyledTemp = styled.span`
  font-size: 0.6em;
`;

interface TempProps {
  temp: number;
}

const Temp: React.FC<TempProps> = ({ temp }) => {
  return <StyledTemp>{temp}&deg;C</StyledTemp>;
};

export default React.memo(Temp);
