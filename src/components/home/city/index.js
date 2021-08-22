import React, { useContext } from "react"
import BoulderMan from "../../../assets/svg/boulderMan"
import { Text, LanguageContext } from "../../../context/languageContext"

import { Body, Context, SubTitle, Title, Wrapper } from "./styles/city"

const CityInfo = () => {
  const { dictionary } = useContext(LanguageContext)
  return (
    <Wrapper>
      <BoulderMan />
      <Context>
        <Title>
          <Text tid={dictionary.homePage.sanCristobal.title} />
        </Title>
        <SubTitle>
          <Text tid={dictionary.homePage.sanCristobal.subtitle1} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.sanCristobal.body1} />
        </Body>
        <SubTitle>
          <Text tid={dictionary.homePage.sanCristobal.subtitle2} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.sanCristobal.body2} />
        </Body>
        <SubTitle>
          <Text tid={dictionary.homePage.sanCristobal.subtitle3} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.sanCristobal.body3} />
        </Body>
        <SubTitle>
          <Text tid={dictionary.homePage.sanCristobal.subtitle4} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.sanCristobal.body4} />
        </Body>
      </Context>
    </Wrapper>
  )
}

export default CityInfo
