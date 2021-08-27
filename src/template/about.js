import React, { useContext } from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { Text, LanguageContext } from "../context/languageContext"
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

const WeDo = ({ data }) => {
  const { dictionary } = useContext(LanguageContext)
  const { slug } = data.allAboutJson.edges[0].node
  const { childImageSharp } = data.allFile.edges[0].node
  const image = getImage(childImageSharp.gatsbyImageData)

  const renderArticles = () => {
    return dictionary[slug].articles.map((article, i) => (
      <Article key={i}>
        <Subtitle>
          <Text tid={article.subtitle} />
        </Subtitle>
        <Body>
          <Text tid={article.body} />
        </Body>
      </Article>
    ))
  }

  return (
    <Layout>
      <Seo title={dictionary[slug].title} />
      <Wrapper>
        <Header>
          <GoBack to="/about/">
            <BackIcon />
          </GoBack>
          <GatsbyImage image={image} alt={dictionary[slug].title} />
          <TitleDiv>
            <TitleText>
              <Text tid={dictionary[slug].title} />
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
