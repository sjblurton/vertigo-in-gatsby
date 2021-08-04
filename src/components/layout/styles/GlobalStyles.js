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
    }
`

export default GlobalStyle
