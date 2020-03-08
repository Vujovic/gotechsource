import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/index/hero'
import WhyChooseUs from '../components/index/whyChooseUs'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <WhyChooseUs />
  </Layout>
)

export default IndexPage
