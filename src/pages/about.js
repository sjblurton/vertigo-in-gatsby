import * as React from "react"
import { Avatars, Cards, MissionArticle } from "../components/about"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <Cards />
    <MissionArticle />
    <Avatars />
  </Layout>
)

export default About
