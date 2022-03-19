import styled, { css } from "styled-components";
import { mediaQuerys } from "../../rules/queryRules";

export const NavWrapper = styled.div`
  display: none;
  ${({ isShow }) =>
    isShow &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100vh;
      z-index: 20;
      background: ${({ theme }) => theme.body.background};
    `}

  @media ${mediaQuerys.tablets} {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  @media ${mediaQuerys.tablets} {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  margin: 1rem;
  @media ${mediaQuerys.tablets} {
    margin: 0 1rem;
  }
`;

export const NavAction = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.header.textColor};

  &:hover {
    color: ${({ theme }) => theme.color.lightGray};
  }
`;
