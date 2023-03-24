import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.div`
  height: 100px;
  gap: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 600;
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

export const FormStyled = styled.form`
  display: flex;
  text-decoration: none;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const InputStyled = styled.input`
  height: 36px;
  width: 300px;
  border-radius: 5px;
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
