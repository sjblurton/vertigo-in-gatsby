import * as React from "react"
import PropTypes from "prop-types"
import { theme } from "../../theme/theme"
import GlobalStyle from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import FontStyles from "./styles/fontStyles"
import Header from "./header"
import { LanguageProvider } from "../../context/languageContext"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <FontStyles />
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
