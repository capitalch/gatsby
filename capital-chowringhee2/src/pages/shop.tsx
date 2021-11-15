import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Shop from '../components/shop/shop';
import diction from '../diction.json'

function ShopPage() {
  return <Layout>
    <SEO title={diction.shop} keywords={diction.keywords} />
    <Shop></Shop>
  </Layout>
}

export default ShopPage