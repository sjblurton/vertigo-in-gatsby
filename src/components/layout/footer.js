import React from "react"
import { SmallText, TextContainer, Wrapper } from "./styles/footer"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Wrapper>
      <TextContainer>
        <SmallText>&copy; Copyright {year}</SmallText>
        <SmallText>
          <a href="tel:+123456789">tel: 0123456789</a>
        </SmallText>
      </TextContainer>
    </Wrapper>
  )
}

export default Footer
