import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
`;

export const ImgDetails = styled.img`
  height: 400px;
`;

export const NavLinkDetails = styled(NavLink)`
  display: flex;
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
