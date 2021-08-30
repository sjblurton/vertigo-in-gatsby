import * as React from "react"
import { Hero, CityInfo, LocalClimbing } from "../components/home"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { useIntl } from "gatsby-plugin-intl"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: "routeLinkNames.HOME" })}
      />
      <Hero />
      <CityInfo />
      <LocalClimbing />
    </Layout>
  )
}

export default IndexPage
