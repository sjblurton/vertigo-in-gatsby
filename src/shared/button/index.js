import React from "react"
import { Wrapper, StyledLink, StyleA, ButtonHTML } from "./styles/button"

const Button = ({
  children,
  variant = "primary",
  disabled,
  to,
  href,
  type,
  ...restProps
}) => {
  const isInternalLink = props => {
    if (href) {
      return href.charAt(0) === "#" ? (
        <StyleA href={href}>{props}</StyleA>
      ) : (
        <StyleA href={href} target="_blank" rel="noreferrer">
          {props}
        </StyleA>
      )
    }
  }
  if (type === "submit")
    return (
      <ButtonHTML disabled={disabled} type={type} {...restProps}>
        {children}
      </ButtonHTML>
    )
  if (to)
    return (
      <StyledLink {...restProps} to={to}>
        <Wrapper disabled={disabled} variant={variant}>
          {children}
        </Wrapper>
      </StyledLink>
    )
  return isInternalLink(
    <Wrapper {...restProps} disabled={disabled} variant={variant}>
      {children}
    </Wrapper>
  )
}

export default Button
