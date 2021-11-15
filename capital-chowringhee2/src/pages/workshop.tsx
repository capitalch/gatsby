import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Workshop from '../components/workshop/workshop';
import diction from '../diction.json'

function WorkshopPage() {
  return <Layout>
    <SEO title={diction.workshop} keywords={diction.keywords} />
    <Workshop></Workshop>
  </Layout>
}

export default WorkshopPage