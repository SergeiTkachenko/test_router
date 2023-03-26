import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.header`
  margin-bottom: 20px;
  padding: 30px;
  box-shadow: 0 0 5px #380bdccc, 0 0 10px #380bdccc, 0 0 15px #380bdccc,
    0 0 20px #380bdccc, 0 0 25px #380bdccc, 0 0 30px #380bdccc,
    inset 0 0 10px #380bdccc, inset 0 0 20px #380bdccc, inset 0 0 22px #380bdccc;
`;

export const NavigationStyled = styled.div`
  height: 100px;
  gap: 6px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 6px;
  color: black;
  background-color: #3bb4fa;
  text-transform: uppercase;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    padding: 10px 20px;
  }

  @media screen and (min-width: 1280px) {
  }

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

export const FormStyled = styled.form`
  display: flex;
  text-decoration: none;
  justify-content: center;
  gap: 5px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const InputStyled = styled.input`
  height: 36px;
  max-width: 300px;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const SearchBtn = styled.button`
  height: 36px;
  width: 100px;
  border-radius: 5px;
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

export const SearchErr = styled.p`
  text-align: center;
  padding: 50px 0 50% 0;
  font-size: 46px;
  font-weight: 600;
`;
