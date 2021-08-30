import React from "react"
import {
  Wrapper,
  Logo,
  ListItem,
  List,
  CloseIcon,
  ButtonUnderline,
  LinkWrapper,
  StyledLink,
  FlagWrapper,
} from "./styles/sidebar"
import SVGLogo from "../../assets/svg/logo"
import CloseSVG from "../../assets/icons/nav/CloseIcon"
import { ROUTES } from "../../data/routes"
import LanguageSelector from "./languageSelector"
import { FormattedMessage } from "gatsby-plugin-intl"

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <Wrapper sidebarOpen={sidebarIsOpen}>
      <CloseIcon onClick={() => setSidebarIsOpen(false)}>
        <CloseSVG />
      </CloseIcon>
      <Logo onClick={() => setSidebarIsOpen(false)}>
        <SVGLogo />
        <StyledLink to={ROUTES.HOME}>Vértigo</StyledLink>
      </Logo>
      <List>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTES.HOME}>
              <FormattedMessage id="routeLinkNames.HOME" />
            </StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTES.ABOUT}>
              <FormattedMessage id="routeLinkNames.ABOUT" />
            </StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTES.TOURS}>
              <FormattedMessage id="routeLinkNames.TOURS" />
            </StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTES.CONTACT}>
              <FormattedMessage id="routeLinkNames.CONTACT" />
            </StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <FlagWrapper>
          <LanguageSelector />
        </FlagWrapper>
      </List>
    </Wrapper>
  )
}

export default Sidebar
