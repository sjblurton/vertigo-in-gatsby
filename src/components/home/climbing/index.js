import React from "react"
import BoulderMan from "../../../assets/svg/boulderMan"
import {
  Body,
  Context,
  SubTitle,
  Title,
  Wrapper,
  Grid,
} from "./styles/climbing"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../../../shared/card"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const LocalClimbing = () => {
  const intl = useIntl()
  const info = new Array(3).fill(null)

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

  const regex = /^local\//i
  const localImages = data.allImageSharp.edges.filter(value =>
    regex.test(value.node.parent.relativePath)
  )
  const cards = new Array(localImages.length).fill(null)

  const renderCards = () => {
    return cards.map((_, i) => (
      <Card
        key={i}
        image={localImages[i].node}
        title={intl.formatMessage({
          id: `homePage.localClimbing.cards.${i}.title`,
        })}
        body={intl.formatMessage({
          id: `homePage.localClimbing.cards.${i}.body`,
        })}
        button1={intl.formatMessage({
          id: `homePage.localClimbing.cards.${i}.button`,
        })}
        href={intl.formatMessage({
          id: `homePage.localClimbing.cards.${i}.slug`,
        })}
      />
    ))
  }

  const renderInfo = () => {
    return info.map((_, i) => (
      <React.Fragment key={i}>
        <SubTitle>
          <FormattedMessage id={`homePage.localClimbing.info.${i}.subtitle`} />
        </SubTitle>
        <Body>
          <FormattedMessage id={`homePage.localClimbing.info.${i}.body`} />
        </Body>
      </React.Fragment>
    ))
  }

  return (
    <Wrapper id="climbing">
      <BoulderMan />
      <Context>
        <Title>
          <FormattedMessage id={`homePage.localClimbing.title`} />
        </Title>
        {renderInfo()}
      </Context>
      <Grid>{renderCards()}</Grid>
    </Wrapper>
  )
}

export default LocalClimbing
