import styled from 'styled-components';

const StyledStatusButton = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 75px;
  margin: 0 10px;

  color: var(--btn-text-color);

  background: var(--btn-back-color);
  border: var(--btn-border);
  border-radius: var(--btn-border-radius);
  box-shadow: var(--btn-shadow);

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
`;

export default StyledStatusButton;
