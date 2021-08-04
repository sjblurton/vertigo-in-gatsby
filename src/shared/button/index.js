import React from "react"
import { Wrapper } from "./styles/button"
import { Link } from "gatsby"

const Button = ({ children, variant, disabled, to, ...restProps }) => {
  return to ? (
    <Link {...restProps} to={to}>
      <Wrapper disabled={disabled} variant={variant}>
        {children}
      </Wrapper>
    </Link>
  ) : (
    <Wrapper {...restProps} disabled={disabled} variant={variant}>
      {children}
    </Wrapper>
  )
}

export default Button
