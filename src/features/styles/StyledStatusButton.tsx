import styled from 'styled-components';

const StyledStatusButton = styled.div`
  cursor: pointer;
  margin: 0px 10px;
  box-shadow: 0px 1px #393939;
  border: 1px solid rgb(16 16 16);
  width: 60px;
  height: 60px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(0deg, black, rgb(81 81 81));
  color: rgb(208 208 208);

  @media (max-width: 576px) {
    width: 55px;
    height: 55px;
  }
`;

export default StyledStatusButton;
