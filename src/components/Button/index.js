import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  max-width: 250px;
  padding: 0.8rem;
  background: ${({ theme }) => theme.header.background};
  color: ${({ theme }) => theme.header.textColor};

  &:hover {
    filter: brightness(1.2);
  }
`;
