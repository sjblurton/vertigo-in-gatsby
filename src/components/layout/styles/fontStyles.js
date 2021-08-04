import { createGlobalStyle } from "styled-components"

import worSansReg from "../../../assets/fonts/WorkSans-Regular.ttf"
import worSansBold from "../../../assets/fonts/WorkSans-Bold.ttf"

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Work Sans', sans-serif;
  src: url(${worSansReg}) format('regular'),
       url(${worSansBold}) format('bold');
}
`

export default FontStyles
