import styled from "styled-components";
import { mediaQuerys } from "../../rules/queryRules";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.5rem;
  padding: 1rem;
  margin: 3rem;
  width: 50%;
  align-items: center;

  @media ${mediaQuerys.desktops} {
    align-items: stretch;
  }

  @media ${mediaQuerys.largeDesktops} {
    width: 30%;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.textColor};
`;

export const Email = styled.input`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  border-radius: 4px;
  padding: 12px;
  color: ${({ theme }) => theme.color.textColor};
  outline: none;
`;

export const Message = styled.textarea`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  border-radius: 4px;
  padding: 12px;
  color: ${({ theme }) => theme.color.textColor};
  outline: none;
`;
