import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { InfoArticle, TourCards } from "../components/tours"

const Tours = () => (
  <Layout>
    <Seo title="Tours" />
    <TourCards />
    <InfoArticle />
  </Layout>
)

export default Tours
