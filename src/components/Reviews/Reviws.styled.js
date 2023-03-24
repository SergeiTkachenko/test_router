import styled from 'styled-components';

export const ReviewsListStyled = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const ReviewsItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  background: #e9f5f8ff;

  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
    transform: scale(1.1);
  }
`;
