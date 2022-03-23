import styled from "styled-components";
import { mediaQuerys } from "../../rules/queryRules";

export const Wrapper = styled.section`
  display: grid;
  grid-template-areas: "introduce";
  justify-content: space-around;
  gap: 1.5rem;
  padding: 2rem;
  margin-top: 3rem;
  width: 100%;
  @media ${mediaQuerys.tablets} {
    grid-template-areas: "introduce icon";
  }
`;

export const MainContent = styled.div`
  grid-area: introduce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media ${mediaQuerys.tablets} {
    text-align: start;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.textColor};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.textColor};
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  max-width: 250px;
  padding: 0.8rem;
  background: ${({ theme }) => theme.header.background};
  color: ${({ theme }) => theme.header.textColor};

  &:hover {
    filter: brightness(1.2);
  }
`;

export const ImageWrapper = styled.div`
  grid-area: icon;
  display: none;

  @media ${mediaQuerys.tablets} {
    display: flex;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 300px;

  @media ${mediaQuerys.largeDesktops} {
    display: flex;
    width: 500px;
    height: 400px;
  }
`;
