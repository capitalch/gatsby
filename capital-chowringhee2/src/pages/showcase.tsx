import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Showcase from "../components/showcase/showcase";
import diction from '../diction.json'

function ProductsPage() {
  return <Layout>
    <SEO title={diction.showcase} keywords={diction.keywords} />
    <Showcase></Showcase>
  </Layout>
}

export default ProductsPage