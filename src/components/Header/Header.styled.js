import styled from "styled-components";
import { mediaQuerys } from "../../rules/queryRules";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  z-index: 99;
  background: ${({ theme }) => theme.header.background};
  padding: 1rem 2rem;
`;

export const Logo = styled.div`
  display: flex;
  margin-left: 1.5rem;
`;

export const Title = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.header.textColor};
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  max-width: ${mediaQuerys.ultraLargeDesktops};
`;

export const ThemeButton = styled.button`
  display: flex;
  font-size: 1rem;
  background: transparent;
`;

export const HamburguerMenu = styled.button`
  display: flex;
  font-size: 1rem;
  background: transparent;
  z-index: 30;

  @media ${mediaQuerys.tablets} {
    display: none;
  }
`;
