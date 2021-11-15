import React from "react";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ServiceCenters from '../components/service-centers/service-centers'
import diction from '../diction.json'

function ServicePage() {
  return <Layout>
   <SEO title={diction.service} keywords={diction.keywords} />
    <ServiceCenters></ServiceCenters>
  </Layout>
}

export default ServicePage