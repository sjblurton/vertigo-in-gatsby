import React, { useContext } from "react"
import { Grid, Section, Title } from "./style/cards"
import { Text, LanguageContext } from "../../../context/languageContext"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../../../shared/card"

const Cards = () => {
  const { dictionary } = useContext(LanguageContext)

  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(
              width: 263
              height: 176
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            parent {
              ... on File {
                id
                name
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  const regex = /^about\//i
  const localImages = data.allImageSharp.edges.filter(value =>
    regex.test(value.node.parent.relativePath)
  )

  const renderCards = () => {
    return dictionary.aboutPage.cards.map((card, i) => (
      <Card
        key={i}
        image={localImages[i].node}
        title={card.title}
        body={card.body}
        button1={card.button}
        to={card.slug}
      />
    ))
  }

  return (
    <Section>
      <Title>
        <Text tid={dictionary.aboutPage.title} />
      </Title>
      <Grid>{renderCards()}</Grid>
    </Section>
  )
}

export default Cards
