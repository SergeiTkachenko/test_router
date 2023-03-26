import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  box-shadow: 0 0 5px #380bdccc, 0 0 10px #380bdccc, 0 0 15px #380bdccc,
    0 0 20px #380bdccc, 0 0 25px #380bdccc, 0 0 30px #380bdccc,
    inset 0 0 10px #380bdccc, inset 0 0 20px #380bdccc, inset 0 0 22px #380bdccc;

  @media screen and (max-width: 768px) {
    max-width: 740px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const BackBtn = styled.button`
  height: 36px;
  width: 100px;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }
`;

export const DetailsWrap = styled.div`
  gap: 24px;
  display: flex;
  font-size: 26px;
  padding: 20px 0 20px 0;

  @media screen and (max-width: 768px) {
    max-width: 740px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ImgDetails = styled.img`
  /* height: 400px; */
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;

export const TitleStyled = styled.h2`
  background-color: rgba(34, 44, 175, 0.7);
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`;

export const OverviewStyled = styled.p`
  background-color: rgba(34, 44, 175, 0.7);
  height: 100%;
  padding: 10px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const NavLinkDetailsWrapper = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinkDetails = styled(NavLink)`
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 6px;
  color: black;
  background-color: #3bb4fa;
  text-transform: uppercase;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }

  &:hover,
  &:focus {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }
`;
