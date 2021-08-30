import React, { useState } from "react"
import PropTypes from "prop-types"
import SVGLogo from "../../assets/svg/logo"
import { ROUTES } from "../../data/routes"
import {
  Content,
  Logo,
  Wrapper,
  List,
  Burger,
  StyledLink,
  ButtonUnderline,
  LinkWrapper,
} from "./styles/header"
import BurgerIcon from "../../assets/icons/nav/BurgerIcon"
import Sidebar from "./sidebar"
import LanguageSelector from "./languageSelector"
import { FormattedMessage } from "gatsby-plugin-intl"

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <>
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <Wrapper>
        <Content>
          <Logo>
            <SVGLogo />
            <StyledLink to={ROUTES.HOME}>Vértigo</StyledLink>
          </Logo>
          <List>
            <LinkWrapper>
              <StyledLink to={ROUTES.HOME}>
                <FormattedMessage id="routeLinkNames.HOME" />
              </StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTES.ABOUT}>
                <FormattedMessage id="routeLinkNames.ABOUT" />
              </StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTES.TOURS}>
                <FormattedMessage id="routeLinkNames.TOURS" />
              </StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTES.CONTACT}>
                <FormattedMessage id="routeLinkNames.CONTACT" />
              </StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LanguageSelector />
          </List>
          <Burger onClick={() => setSidebarIsOpen(true)}>
            <BurgerIcon />
          </Burger>
        </Content>
      </Wrapper>
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
