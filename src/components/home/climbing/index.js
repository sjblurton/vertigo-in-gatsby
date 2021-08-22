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
      allImageSharp(skip: 1) {
        edges {
          node {
            id
            gatsbyImageData(
              width: 263
              height: 176
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)
  const renderCards = () => {
    return dictionary.homePage.localClimbing.cards.map((card, i) => (
      <Card
        image={data.allImageSharp.edges[i].node}
        title={card.title}
        body={card.body}
        button1={card.button}
        to={card.slug}
      />
    ))
  }

  // console.log(data.allImageSharp.edges[0].node)
  // const image = getImage(data.allImageSharp.edges[0].node)
  // console.log(image)
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
