import React, { useContext } from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { Text, LanguageContext } from "../context/languageContext"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BackIcon from "../assets/svg/BackIcon"
import {
  Body,
  ButtonContainer,
  Content,
  GoBack,
  Image,
  ImageCover,
  Price,
  SmallText,
  Title,
  Wrapper,
} from "./styles/tour"
import { Button } from "../shared"

const Tour = ({ data }) => {
  const { dictionary } = useContext(LanguageContext)
  const { slug } = data.allToursJson.edges[0].node
  const { childImageSharp } = data.allFile.edges[0].node
  const pageData = dictionary[slug]
  const image = getImage(childImageSharp.gatsbyImageData)

  const renderBody = () => {
    return pageData.body.map((paragraph, i) => (
      <Body key={i}>
        <Text tid={paragraph} />
      </Body>
    ))
  }

  return (
    <Layout>
      <Seo title={pageData.title} />
      <Wrapper>
        <GoBack to="/tours/">
          <BackIcon />
        </GoBack>
        <Content>
          <Title>
            <Text tid={pageData.title} />
          </Title>
          {renderBody()}
          <ButtonContainer>
            <Price>
              <Text tid={pageData.price} />
            </Price>
            <Button to="/contact">book now</Button>
            <SmallText>
              <Text tid={pageData.smallText} />
            </SmallText>
          </ButtonContainer>
        </Content>
        <Image>
          <ImageCover />
          <GatsbyImage image={image} alt={pageData.title} />
        </Image>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query toursQuery($slug: String!, $image: String!) {
    allToursJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          image
        }
      }
    }
    allFile(filter: { relativePath: { eq: $image } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 800
              height: 800
            )
          }
        }
      }
    }
  }
`

export default Tour
