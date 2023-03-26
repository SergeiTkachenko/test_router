import styled from 'styled-components';

export const Container = styled.div`
  background: #383781ff;
  background: repeating-linear-gradient(
    135deg,
    #052650 9% 9%,
    #383781ff 10% 10%
  );
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  margin: 0 auto;
  padding: 0 20px;

  box-shadow: 0 0 10px #380bdccc, 0 0 20px #380bdccc, 0 0 22px #380bdccc,
    0 0 25px #380bdccc, 0 0 30px #380bdccc, 0 0 32px #380bdccc,
    0 0 36px #380bdccc, 0 0 55px #380bdccc, 0 0 66px #380bdccc,
    inset 0 0 10px #380bdccc, inset 0 0 20px #380bdccc, inset 0 0 22px #380bdccc,
    inset 0 0 25px #380bdccc, inset 0 0 30px #380bdccc, inset 0 0 32px #380bdccc,
    inset 0 0 36px #380bdccc, inset 0 0 40px #380bdccc, inset 0 0 45px #380bdccc;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 15px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 5px;
  }
`;
