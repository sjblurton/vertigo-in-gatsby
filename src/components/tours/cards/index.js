import React from "react"
import { Grid, Section, Title } from "./styles/tour"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../../../shared/card"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const ToursCards = () => {
  const intl = useIntl()
  const cards = new Array(3).fill(null)

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
    return cards.map((_, i) => (
      <Card
        key={i}
        image={localImages[i].node}
        title={intl.formatMessage({ id: `toursPage.cards.${i}.title` })}
        body={intl.formatMessage({ id: `toursPage.cards.${i}.body` })}
        button1={intl.formatMessage({
          id: `toursPage.cards.${i}.button`,
        })}
        to={intl.formatMessage({ id: `toursPage.cards.${i}.slug` })}
      />
    ))
  }

  return (
    <Section>
      <Title>
        <FormattedMessage id={`toursPage.title`} />
      </Title>
      <Grid>{renderCards()}</Grid>
    </Section>
  )
}

export default ToursCards
