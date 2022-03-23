import styled from "styled-components";
import { mediaQuerys } from "../../rules/queryRules";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 3rem;
  width: 100%;
  gap: 1rem;

  @media ${mediaQuerys.desktops} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
`;

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  width: 100%;

  @media ${mediaQuerys.tablets} {
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.textColor};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.textColor};
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${mediaQuerys.tablets} {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Service = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
`;

export const Image = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServicesTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.color.textColor};
`;

export const ServicesDescription = styled.p`
  color: ${({ theme }) => theme.color.textColor};
`;
