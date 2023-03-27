import styled from 'styled-components';

const StyledContent = styled.section`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80%;
  padding: 10px;

  color: var(--btn-text-color);

  background: #000c;

  transition: all 0.3s linear;
`;

export default StyledContent;
