import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
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
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Tour = ({ data }) => {
  const intl = useIntl()
  const cards = new Array(3).fill(null)
  const { slug } = data.allToursJson.edges[0].node
  const { childImageSharp } = data.allFile.edges[0].node
  const image = getImage(childImageSharp.gatsbyImageData)

  const renderBody = () => {
    return cards.map((_, i) => (
      <Body key={i}>
        <FormattedMessage id={`${slug}.body.${i}`} />
      </Body>
    ))
  }

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: `${slug}.title` })}
      />
      <Wrapper>
        <GoBack to="/tours/">
          <BackIcon />
        </GoBack>
        <Content>
          <Title>
            <FormattedMessage id={`${slug}.title`} />
          </Title>
          {renderBody()}
          <ButtonContainer>
            <Price>
              <FormattedMessage id={`${slug}.price`} />
            </Price>
            <Button to="/contact">
              <FormattedMessage id={`${slug}.button`} />
            </Button>
            <SmallText>
              <FormattedMessage id={`${slug}.smallText`} />
            </SmallText>
          </ButtonContainer>
        </Content>
        <Image>
          <ImageCover />
          <GatsbyImage
            image={image}
            alt={intl.formatMessage({ id: `${slug}.title` })}
          />
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
