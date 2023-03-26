import styled from 'styled-components';
export const UpBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  font-size: 16px;
  line-height: 1.2;
  padding: 20px 20px;
  background-color: #271cc2;
  color: #fff;
  border: none;
  border-radius: 50% 50% 10% 10%;
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: 0.8;
  box-shadow: 0 0 5px #380bdccc, 0 0 10px #380bdccc, 0 0 15px #380bdccc,
    0 0 20px #380bdccc, 0 0 25px #380bdccc, 0 0 30px #380bdccc,
    inset 0 0 10px #380bdccc, inset 0 0 20px #380bdccc, inset 0 0 22px #380bdccc;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
