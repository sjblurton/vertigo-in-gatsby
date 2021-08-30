import React from "react"
import { Wrapper } from "./styles/button"
import { Link } from "gatsby-plugin-intl"

const Button = ({ children, variant, disabled, to, href, ...restProps }) => {
  return to ? (
    <Link {...restProps} to={to}>
      <Wrapper disabled={disabled} variant={variant}>
        {children}
      </Wrapper>
    </Link>
  ) : (
    <a href={href} target="_blank">
      <Wrapper {...restProps} disabled={disabled} variant={variant}>
        {children}
      </Wrapper>
    </a>
  )
}

export default Button
