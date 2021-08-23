import styled from "styled-components/macro"
import { Link } from "gatsby"

export const Wrapper = styled.header`
  position: fixed;
  background-color: ${props => props.theme.color.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  width: 100vw;
  height: 60px;
  z-index: 999;
`
export const Content = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  height: auto;
  align-items: center;
  justify-content: space-between;

  & svg {
    width: 20px;
    margin-right: 8px;
    height: 20px;
  }
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 1px dotted ${props => props.theme.color.light};
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    display: none;
  }
`
export const ButtonUnderline = styled.div`
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: 5px;
  border-radius: 5px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 350ms ease;
  background-color: ${props => props.theme.color.light};
`

export const LinkWrapper = styled.div`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  &:hover ${ButtonUnderline} {
    transform: scale(1);
    transform-origin: left;
  }
`

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  color: ${props => props.theme.color.light};
  font-weight: bold;
`

export const Burger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 32px;
  cursor: pointer;
  & svg path {
    stroke: ${props => props.theme.color.light};
  }

  &:focus {
    outline: 1px dotted ${props => props.theme.color.primary};
  }

  @media (min-width: 750px) {
    display: none;
  }
`
