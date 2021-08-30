import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { LinkWrapper } from "./styles/header"
import { changeLocale } from "gatsby-plugin-intl"

export default function LanguageSelector() {
  const handleLanguageChange = e => changeLocale(e.target.name)

  return (
    <>
      <LinkWrapper>
        <StaticImage
          onClick={handleLanguageChange}
          name="en"
          src="../../assets/icons/nav/iconUsa.png"
          alt="English"
          placeholder="blurred"
          layout="fixed"
          width={24}
          height={24}
        />
      </LinkWrapper>
      <LinkWrapper>
        <StaticImage
          onClick={handleLanguageChange}
          name="es"
          src="../../assets/icons/nav/mexFlag.png"
          alt="Spanish"
          placeholder="blurred"
          layout="fixed"
          width={24}
          height={24}
        />
      </LinkWrapper>
    </>
  )
}
