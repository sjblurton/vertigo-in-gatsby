import React, { useContext } from "react"
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
import { Text, LanguageContext } from "../../context/languageContext"
import LanguageSelector from "./languageSelector"

const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  const { dictionary } = useContext(LanguageContext)

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
              <Text tid={dictionary.routeLinkNames.HOME} />
            </StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTES.ABOUT}>
              {" "}
              <Text tid={dictionary.routeLinkNames.ABOUT} />
            </StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTES.TOURS}>
              <Text tid={dictionary.routeLinkNames.TOURS} />
            </StyledLink>
            <ButtonUnderline />
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper onClick={() => setSidebarIsOpen(false)}>
            <StyledLink to={ROUTES.CONTACT}>
              <Text tid={dictionary.routeLinkNames.CONTACT} />
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
