import React, { useContext } from "react"
import { Text, LanguageContext } from "../../../context/languageContext"
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

const LocalClimbing = () => {
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

  const regex = /^local\//i
  const localImages = data.allImageSharp.edges.filter(value =>
    regex.test(value.node.parent.relativePath)
  )

  const renderCards = () => {
    return dictionary.homePage.localClimbing.cards.map((card, i) => (
      <Card
        key={i}
        image={localImages[i].node}
        title={card.title}
        body={card.body}
        button1={card.button}
        href={card.slug}
      />
    ))
  }

  return (
    <Wrapper>
      <Context>
        <Title>
          <Text tid={dictionary.homePage.localClimbing.title} />
        </Title>
        <SubTitle>
          <Text tid={dictionary.homePage.localClimbing.subtitle1} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.localClimbing.body1} />
        </Body>
        <SubTitle>
          <Text tid={dictionary.homePage.localClimbing.subtitle2} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.localClimbing.body2} />
        </Body>
        <SubTitle>
          <Text tid={dictionary.homePage.localClimbing.subtitle3} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.localClimbing.body3} />
        </Body>
        <SubTitle>
          <Text tid={dictionary.homePage.localClimbing.subtitle4} />
        </SubTitle>
        <Body>
          <Text tid={dictionary.homePage.localClimbing.body4} />
        </Body>
      </Context>
      <Grid>{renderCards()}</Grid>
    </Wrapper>
  )
}

export default LocalClimbing
