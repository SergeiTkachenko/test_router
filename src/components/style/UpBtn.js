import styled from 'styled-components';
export const UpBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  font-size: 16px;
  line-height: 1.2;
  padding: 20px 30px;
  background-color: #271cc2;
  color: #fff;
  border: none;
  border-radius: 50% 50% 10% 10%;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
