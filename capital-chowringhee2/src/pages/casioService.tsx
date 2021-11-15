import React, { useState } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import axios from "axios"
import settings from "../settings.json"
import Img from "gatsby-image"
import { useGallary } from "../hooks/gallary-hook"
import sparePartsJson from "../gallaries/spare-parts/spare-parts.json"
import diction from "../diction.json"
// import { CasioService } from "./components/casio-service/casio-service"
import {CasioService} from '../components/casio-service/casio-service'

function casioService() {
  return (
    <Layout>
      <SEO title={diction.casio} keywords={diction.keywords} />
      <CasioService />
    </Layout>
  )
}

export default casioService
