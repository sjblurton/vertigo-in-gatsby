import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import {
  Article,
  Body,
  Content,
  GoBack,
  Header,
  Subtitle,
  TitleDiv,
  TitleText,
  Wrapper,
} from "./styles/about"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BackIcon from "../assets/svg/BackIcon"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const WeDo = ({ data }) => {
  const intl = useIntl()
  const cards = new Array(3).fill(null)
  const { slug } = data.allAboutJson.edges[0].node
  const { childImageSharp } = data.allFile.edges[0].node
  const image = getImage(childImageSharp.gatsbyImageData)

  const renderArticles = () => {
    return cards.map((_, i) => (
      <Article key={i}>
        <Subtitle>
          <FormattedMessage id={`${slug}.articles.${i}.subtitle`} />
        </Subtitle>
        <Body>
          <FormattedMessage id={`${slug}.articles.${i}.body`} />
        </Body>
      </Article>
    ))
  }

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: `${slug}.title` })}
      />
      <Wrapper>
        <Header>
          <GoBack to="/about/">
            <BackIcon />
          </GoBack>
          <GatsbyImage
            image={image}
            alt={intl.formatMessage({ id: `${slug}.title` })}
          />
          <TitleDiv>
            <TitleText>
              <FormattedMessage id={`${slug}.title`} />
            </TitleText>
          </TitleDiv>
        </Header>
        <Content>{renderArticles()}</Content>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query aboutQuery($slug: String!, $image: String!) {
    allAboutJson(filter: { slug: { eq: $slug } }) {
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
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`

export default WeDo
