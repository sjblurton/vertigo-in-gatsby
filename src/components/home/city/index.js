import React from "react"
import BoulderMan from "../../../assets/svg/boulderMan"
import { Body, Context, SubTitle, Title, Wrapper } from "./styles/city"
import { FormattedMessage } from "gatsby-plugin-intl"

const CityInfo = () => {
  const info = new Array(4).fill(null)

  const renderInfo = () => {
    return info.map((_, i) => (
      <React.Fragment key={i}>
        <SubTitle>
          <FormattedMessage id={`homePage.sanCristobal.info.${i}.subtitle`} />
        </SubTitle>
        <Body>
          <FormattedMessage id={`homePage.sanCristobal.info.${i}.body`} />
        </Body>
      </React.Fragment>
    ))
  }

  return (
    <Wrapper>
      <BoulderMan />
      <Context>
        <Title>
          <FormattedMessage id={`homePage.sanCristobal.title`} />
        </Title>
        {renderInfo()}
      </Context>
    </Wrapper>
  )
}

export default CityInfo
