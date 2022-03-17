import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
    z-index: 99;
    background: ${({ theme }) => theme.header.background};
    padding: 1rem;
`;

export const Logo = styled.div`
    display: flex;
`;

export const Title = styled.a`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.header.textColor};
`;

export const Navigation = styled.div`
    display: flex;
`;

export const ThemeButton = styled.button`
    display: flex;
    font-size: 1rem;
    background: transparent;
`;
