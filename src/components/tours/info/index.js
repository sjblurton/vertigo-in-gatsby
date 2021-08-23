import React, { useContext } from "react"
import { Body, Card, Content, Section, Title } from "./styles/info"
import { Text, LanguageContext } from "../../../context/languageContext"

const InfoArticle = () => {
  const { dictionary } = useContext(LanguageContext)

  const renderInfo = () => {
    return dictionary.toursPage.info.map((card, i) => (
      <Card key={i}>
        <Title>
          <Text tid={card.title} />
        </Title>
        <Body>
          <Text tid={card.body} />
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
