import * as React from "react"
import PropTypes from "prop-types"
import { theme } from "../../theme/theme"
import GlobalStyle from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import FontStyles from "./styles/fontStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <FontStyles />
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
