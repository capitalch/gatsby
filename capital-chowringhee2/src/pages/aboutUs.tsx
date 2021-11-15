import React from "react"
import Layout from "../components/layout/layout"
import {imageProcessor} from "../hooks/image-processor-hook"
import SEO from "../components/seo"
import diction from '../diction.json'

function AboutPage() {
  const capitalBoard = imageProcessor("capitalBoard","fluid");
  const showwindow = imageProcessor("showwindow","fluid");
  const showwindow1 = imageProcessor("showwindow1","fluid");

  return <Layout>
    <SEO title={diction.about} keywords={diction.keywords} />

    <div className="about">
    <p>
    <span className="bold">About:</span> Capital Chowringhee Pvt Ltd is one of the leading retailers of electronics goods in heart 
    of Kolkata  at 12 J.L. Nehru Road. It was founded in year 1991. Its root lies in legendary electronic retail 
    shop of Capital Electronics. It belongs to the same family of business house which owns Capital Electronics.
    </p>
    {capitalBoard}
    <p>
    <span className="bold">Motive:</span> Capital Chowringhee believes in quality and best of customer service. It does not have any 
    branches. It occupies a space of around 1900 Sq Feet spread over ground floor and first floor for its retail 
    business of electronic goods. We provide personalized service to customers. Our products and service offerings 
    are most economical and good value for money which result in full customer satisfaction.
    </p>

    <p>
    <span className="bold">Specialization:</span> Capital Chowringhee over a period has specialized in sales of digital cameras and 
    photography goods and associated accessories. It hails from the days of optical film cameras and migrated to 
    sale of digital camera products. Today it deals with most advanced SLR and mirrorless cameras, video cameras 
    and lenses and accessories of almost all reputed brands.
    </p>

    {showwindow}

    <p>
    <span className="bold">Photography:</span> Capital Chowringhee has several eminent and famous photographers as its customers. 
    Several photography workshops are conducted in the shop and out in the open at regular basis and renowned 
    photographers and instructors from Canon, Nikon and Sony become part of it. We invite existing customers and 
    enthusiasts from public to participate in these workshops which are subsidised heavily by us and by parent 
    companies.
    </p>

    <p>
    <span className="bold">Associations:</span> Capital Chowringhee has its associate “Billenium Sales and Service Pvt Ltd” as 
    authorized Nikon service centre at corner of first floor hence facilitating customers for both sales and 
    service of Nikon cameras at the same place. We also have close tie-ups and association with Casio authorized 
    service centre at first floor of the shop. All Casio calculators, music synthesizers, organs watches, 
    projectors are repaired here. We have close association and tie ups with Sony authorized service centre of 
    “Nav technology Pvt ltd” at 130A Bagmari Road, SCH -VIIM, Kol -700054 wherein we have the same owners.
    </p>

    <p>
    <span className="bold">Other items:</span> Capital Chowringhee also sells LED TV, Refrigerators, Washing Machines, music 
    systems, Cellular phones, audio and video products and accessories, wide range of earphones and headphones, 
    computers, laptop and accessories, domestic and beauty products, watches and other electronic items.
    </p>

    {showwindow1}

    <p>
    <span className="bold">Software:</span> Capital Chowringhee is also present in Software Development business in name of Kush 
    Infotech at 92/2A Bidhan Nagar road, wherein we specialize in creation of modern software applications in 
    latest cutting-edge web technology. We develop dynamic and highly optimized web sites, web applications and 
    mobile applications in technology like HTML5, CSS3, Advanced JavaScript, React.js, Angular.js, Node.js and 
    PostgreSql.
    </p>
    </div>
  </Layout>
}

export default AboutPage