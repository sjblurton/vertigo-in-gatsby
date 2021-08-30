import React from "react"
import { Grid, Section, Title } from "./style/cards"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../../../shared/card"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Cards = () => {
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

  const regex = /^about\//i
  const localImages = data.allImageSharp.edges.filter(value =>
    regex.test(value.node.parent.relativePath)
  )

  const renderCards = () => {
    return cards.map((card, i) => (
      <Card
        key={i}
        image={localImages[i].node}
        title={intl.formatMessage({
          id: `aboutPage.cards.${i}.title`,
        })}
        body={intl.formatMessage({
          id: `aboutPage.cards.${i}.body`,
        })}
        button1={intl.formatMessage({
          id: `aboutPage.cards.${i}.button`,
        })}
        to={intl.formatMessage({
          id: `aboutPage.cards.${i}.slug`,
        })}
      />
    ))
  }

  return (
    <Section>
      <Title>
        <FormattedMessage id={`aboutPage.title`} />
      </Title>
      <Grid>{renderCards()}</Grid>
    </Section>
  )
}

export default Cards
