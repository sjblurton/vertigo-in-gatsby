import React, { useContext } from "react"
import { Grid, Section, Title } from "./styles/tour"
import { Text, LanguageContext } from "../../../context/languageContext"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../../../shared/card"

const ToursCards = () => {
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

  const regex = /^tours\//i
  const localImages = data.allImageSharp.edges.filter(value =>
    regex.test(value.node.parent.relativePath)
  )

  const renderCards = () => {
    return dictionary.toursPage.cards.map((card, i) => (
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
        <Text tid={dictionary.toursPage.title} />
      </Title>
      <Grid>{renderCards()}</Grid>
    </Section>
  )
}

export default ToursCards
