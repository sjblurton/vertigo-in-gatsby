import React from "react"
import { Body, Card, Content, Section, Title } from "./styles/info"
import { FormattedMessage } from "gatsby-plugin-intl"

const InfoArticle = () => {
  const info = new Array(3).fill(null)

  const renderInfo = () => {
    return info.map((_, i) => (
      <Card key={i}>
        <Title>
          <FormattedMessage id={`toursPage.info.${i}.title`} />
        </Title>
        <Body>
          <FormattedMessage id={`toursPage.info.${i}.body`} />
        </Body>
      </Card>
    ))
  }

  return (
    <Section>
      <Content>{renderInfo()}</Content>
    </Section>
  )
}

export default InfoArticle
