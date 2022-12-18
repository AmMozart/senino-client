import styled from 'styled-components';

const StyledStatusButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--btn-text-color);
  margin: 0 10px;
  width: 75px;
  background: var(--btn-back-color);
  cursor: pointer;
  border: var(--btn-border);
  border-radius: var(--btn-border-radius);
  box-shadow: var(--btn-shadow);

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
`;

export default StyledStatusButton;
