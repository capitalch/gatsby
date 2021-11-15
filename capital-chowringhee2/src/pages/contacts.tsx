import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Contact from '../components/contacts/contacts';
import diction from '../diction.json'

function ContactsPage() {
  return <Layout>
    <SEO title={diction.contact} keywords={diction.keywords} />
    <Contact></Contact>
  </Layout>
}

export default ContactsPage