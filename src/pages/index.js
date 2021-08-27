import * as React from "react"
import { Hero, CityInfo, LocalClimbing } from "../components/home"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const IndexPage = () => {
  const intl = useIntl()
  console.log(intl)
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "routeLinkNames.HOME" })} />
      <Hero />
      <CityInfo />
      <LocalClimbing />
    </Layout>
  )
}

export default IndexPage
