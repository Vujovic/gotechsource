import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/index/hero'
import WhyChooseUs from '../components/index/whyChooseUs'
import HowDoesItWork from '../components/index/howDoesItWork'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <WhyChooseUs />
    <HowDoesItWork />
  </Layout>
)

export default IndexPage
