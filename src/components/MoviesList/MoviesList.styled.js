import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const MovieItemStyled = styled.li`
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  background: #67d4f0ff;

  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 250px;
  }

  @media screen and (min-width: 1280px) {
    width: 280px;
  }

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: rgba(77, 41, 238, 1) 0px 15px 25px 10px,
      rgba(0, 4, 10, 0.9) 0px 10px 15px -2px;
    transform: scale(1.02);
  }
`;
