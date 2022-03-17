import styled, { css } from "styled-components";

export const NavWrapper = styled.div`
    display: none;
    ${({ isShow }) =>
        isShow && css`
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            height: 100vh;
            width: 100vw;
            z-index: 20;
        `
    }

    @media (min-width: "768px") {
        display: flex;
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    @media (min-width: "768px") {
        flex-direction: row;
    }
`

export const NavItem = styled.li`
    margin: 1rem;
    @media (min-width: "768px") {
        margin: 0 1rem;
    }
`

export const NavAction = styled.a`
    font-size: 1rem;
    color: ${({ theme }) => theme.header.textColor};

    &:hover {
        text-decoration: color ${({ theme }) => theme.color.lightGray};
    }
`
