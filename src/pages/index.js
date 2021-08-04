import * as React from "react"
import { Hero } from "../components/home"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
