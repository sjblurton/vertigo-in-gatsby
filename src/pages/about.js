import React from "react"
import { Avatars, Cards, MissionArticle } from "../components/about"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { useIntl } from "gatsby-plugin-intl"

const About = () => {
  const intl = useIntl()

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: "routeLinkNames.ABOUT" })}
      />
      <Cards />
      <MissionArticle />
      <Avatars />
    </Layout>
  )
}

export default About
