import styled from "styled-components";
import { mediaQuerys } from "../rules/queryRules";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem 1rem 1rem;

  @media ${mediaQuerys.ultraLargeDesktops} {
    padding: 7rem 5rem 5rem 5rem;
  }
`;
