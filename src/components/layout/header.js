import React, { useState, useContext } from "react"
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
import { Text, LanguageContext } from "../../context/languageContext"

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const { dictionary } = useContext(LanguageContext)

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
                <Text tid={dictionary.routeLinkNames.HOME} />
              </StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTES.ABOUT}>
                <Text tid={dictionary.routeLinkNames.ABOUT} />
              </StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTES.TOURS}>
                <Text tid={dictionary.routeLinkNames.TOURS} />
              </StyledLink>
              <ButtonUnderline />
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to={ROUTES.CONTACT}>
                <Text tid={dictionary.routeLinkNames.CONTACT} />
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
