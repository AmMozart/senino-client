import styled from 'styled-components';

import StyledStatusButton from './StyledStatusButton';

interface StyledScriptButtonProps {
  isActive: boolean;
}

const StyledScriptButton = styled(StyledStatusButton)<StyledScriptButtonProps>`
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(45deg, black, rgb(67, 160, 71))' : ''};
`;

export default StyledScriptButton;
