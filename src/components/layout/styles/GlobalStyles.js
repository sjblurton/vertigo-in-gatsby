import { createGlobalStyle } from "styled-components"
import bgTiles from "../../../assets/images/rockywall.png"

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border:0;
    }

    a{
        text-decoration: none;
    }

    body {
        background: url(${bgTiles});
        background-size: 50%;
        font-family: 'Work Sans', sans-serif;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        color: #0e0e2c;
    }

    h1{
        font-style: normal;
        font-weight: bold;
        font-size: clamp(32px, 4vw + 1rem, 64px);
        line-height: clamp(36px, 4vw, 70px);
        letter-spacing: -0.02em;
        text-transform: capitalize;
    }

    h2{
        font-style: normal;
        font-weight: bold;
        font-size: clamp(24px, 2vw + 1rem, 32px);
        line-height: 47px;
        letter-spacing: -0.02em;
        text-transform: capitalize;
    }

    h3{
        font-style: normal;
        font-weight: bold;
        font-size: clamp(16px, 2vw + 1rem, 24px);
        line-height: 28px;
        letter-spacing: -0.02em;
        text-transform: capitalize;
    }

    p{
        color: ${props => props.theme.color.text};
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.02em;
    }

    strong{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
    }

    small{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
    }
    
    button{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.04em;
        text-transform: uppercase;
        box-shadow: 0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4);
    }
`

export default GlobalStyle
