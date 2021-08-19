import * as React from "react"
import { Hero, CityInfo } from "../components/home"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CityInfo />
  </Layout>
)

export default IndexPage
