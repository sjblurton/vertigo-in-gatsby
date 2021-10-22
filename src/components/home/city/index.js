import React from "react"
import { Body, Context, SubTitle, Title, Wrapper } from "./styles/city"
import { FormattedMessage } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"

const CityInfo = () => {
  const info = new Array(4).fill(null)
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "san_crist_bg.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.bg.childImageSharp.fluid

  const renderInfo = () => {
    return info.map((_, i) => (
      <React.Fragment key={i}>
        <SubTitle>
          <FormattedMessage id={`homePage.sanCristobal.info.${i}.subtitle`} />
        </SubTitle>
        <Body>
          <FormattedMessage id={`homePage.sanCristobal.info.${i}.body`} />
        </Body>
      </React.Fragment>
    ))
  }

  return (
    <Wrapper Tag="section" fluid={imageData} opacity="0.5">
      <Context>
        <Title>
          <FormattedMessage id={`homePage.sanCristobal.title`} />
        </Title>
        {renderInfo()}
      </Context>
    </Wrapper>
  )
}

export default CityInfo
