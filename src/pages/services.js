import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/services/hero'
import ServiceList from '../components/services/serviceList'

export default () => (
  <Layout>
    <SEO title="Services" />
    <Hero />
    <ServiceList />
  </Layout>
)
