import React from "react"
import Main from '../components/main/main';
import diction from '../diction.json'
import Layout from "../components/layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage() {

  return <Layout>
    <SEO title={diction.home} keywords={diction.keywords} />
    <Main></Main>
  </Layout>
}

export default IndexPage

/*

*/