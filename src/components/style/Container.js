import styled from 'styled-components';

export const Container = styled.div`
  background: #383781ff;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  margin: 0 auto;
  padding: 0 20px;

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
