import * as React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const ContactPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "routeLinkNames.CONTACT" })} />
      <Contact />
    </Layout>
  )
}

export default ContactPage
