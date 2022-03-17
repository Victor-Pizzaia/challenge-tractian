import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        min-height: 100%;
    }

    body {
        background: ${({ theme }) => theme.body.background};
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }

    button, a {
        cursor: pointer;
        border: none;
        outline: none;
        color: inherit;
    }

    a {
        text-decoration: none;
    }
`
