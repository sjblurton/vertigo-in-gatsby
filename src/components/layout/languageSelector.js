import React, { useContext } from "react"

import { LanguageContext } from "../../context/languageContext"

import { StaticImage } from "gatsby-plugin-image"
import { LinkWrapper } from "./styles/header"

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)
  const handleLanguageChange = e => userLanguageChange(e.target.name)
  console.log(userLanguage)
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
