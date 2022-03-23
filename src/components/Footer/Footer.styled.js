import styled from "styled-components";
import { mediaQuerys } from "../../rules/queryRules";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.footer.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 1.5rem;
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQuerys.phones} {
    flex-direction: row;
  }
`;

export const SocialImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 12px;
`;

export const SocialLink = styled.a``;

export const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.header.textColor};
`;
