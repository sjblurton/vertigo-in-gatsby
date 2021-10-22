import styled, { css } from "styled-components/macro"
import { Link } from "gatsby-plugin-intl"

const variantOptions = {
  primary: {
    backgroundColor: `#0A6567`,
    color: "white",
    border: `1px solid transparent`,
  },
  outline: {
    backgroundColor: "white",
    color: `#0A6567`,
    border: `1px solid #0A6567`,
  },
}
const variantHover = {
  primary: {
    backgroundColor: "white",
    color: `#0A6567`,
    border: `1px solid #0A6567`,
  },
  outline: {
    backgroundColor: `#0A6567`,
    color: "white",
    border: `1px solid #transparent`,
  },
}

const sharedStyle = css`
  ${props => props.theme.text.button}
  ${props => variantOptions[props.variant]}
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: "0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4)";
  border-radius: 8px;
  transition: all 250ms ease-in;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    ${props => variantHover[props.variant]}
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #0a656799;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`

export const Wrapper = styled.div`
  ${sharedStyle}
`

export const ButtonHTML = styled.button`
  ${sharedStyle}
`

export const StyledLink = styled(Link)`
  border-radius: 8px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #0a656799;
  }
`

export const StyleA = styled.a`
  border-radius: 8px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #0a656799;
  }
`
