import styled from 'styled-components';

const StyledStatusButton = styled.div`
  cursor: pointer;
  margin: 0 10px;
  box-shadow: 0 0 6px rgb(16 16 16);
  border: 1px solid rgb(16 16 16);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(0deg, black, rgb(81 81 81));
  color: rgb(208 208 208);
  font-size: 1.2em;

  @media (max-width: 576px) {
    margin: 0 3px;
  }
`;

export default StyledStatusButton;
