import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { InfoArticle, TourCards } from "../components/tours"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const Tours = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "routeLinkNames.TOURS" })} />
      <TourCards />
      <InfoArticle />
    </Layout>
  )
}

export default Tours
