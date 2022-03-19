import styled from "styled-components";
import { mediaQuerys, sizes } from "../../rules/queryRules";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  margin-top: 3rem;
  width: 100%;
  gap: 1rem;

  @media ${mediaQuerys.tablets} {
    display: grid;
    grid-template-areas: "image content";
    gap: 4rem;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: image;
`;

export const Image = styled.img`
  width: 300px;
  height: 250px;

  @media ${mediaQuerys.tablets} {
    width: 400px;
    height: 350px;
  }
`;

export const MainContent = styled.div`
  grid-area: content;
  max-width: ${sizes.tablet};
`;

export const Content = styled.p`
  font-size: larger;
  color: ${({ theme }) => theme.color.textColor};
`;
