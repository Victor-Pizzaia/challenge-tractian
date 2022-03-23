import styled from "styled-components";
import { mediaQuerys } from "../../rules/queryRules";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  @media ${mediaQuerys.phones} {
    flex-direction: row;
  }
`;
export const Logo = styled.img`
  width: 150px;
  margin-right: 12px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.textColor};
  text-align: center;
  margin: 0;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media ${mediaQuerys.tablets} {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  @media ${mediaQuerys.ultraLargeDesktops} {
    justify-content: center;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  border-radius: 6px;
  padding: 1.5rem;
  transform: translateY(0);
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 10px ${({ theme }) => theme.shadow.color};
  }
`;

export const CardTitle = styled.h5`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.textColor};
`;

export const CardContent = styled.p`
  color: ${({ theme }) => theme.color.textColor};
`;
