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
  font-weight: 800;
  padding: 10px 20px;
  border-radius: 6px;
  color: black;

  &.active {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }
`;
