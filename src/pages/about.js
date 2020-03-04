import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      shenzhen: file(relativePath: { eq: "shenzhen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const TextImage = styled.section`
    > h1 {
      margin-top: 50px;
      text-align: center;
    }
    .intro {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 50px auto;
      .gatsby-image-wrapper {
        width: 20%;
      }
      p {
        max-width: 40%;
        text-align: justify;
      }
    }
    .reversed {
      flex-direction: row-reverse;
    }
    @media screen and (max-width: 1280px) {
      .intro {
        .gatsby-image-wrapper {
          width: 30%;
        }
      }
    }
    @media screen and (max-width: 968px) {
      .intro {
        flex-direction: column-reverse;
        .gatsby-image-wrapper {
          min-width: 60%;
        }
        p {
          margin-top: 20px;
          max-width: 100%;
          padding: 0 20px;
        }
      }
    }
  `

  return (
    <Layout>
      <SEO title="About" />
      <TextImage>
        <h1>About Us</h1>
        <div className="intro">
          <p>
            <strong>GoTechSource</strong> is a team of experienced procurement
            managers from Europe, who have been living and working in Shenzhen
            for many years. To ensure we got the best prices, we got support
            from local professionals who have gained their experience in some of
            the largest electronics factories such as FLEX, Foxconn... Finding
            suppliers and ordering goods from China is our core business. We
            specialize in electronic products and components. Our mission is to
            enable equal conditions of business with Chinese producers,
            start-ups, small and medium-sized enterprises, and facilitate the
            process of procurement and development of new products. The
            combination of the Western sense of accuracy and responsibility with
            Chinese logistics gives us the advantage of providing you the best
            service and delivery on time.
          </p>
          <Img
            draggable="false"
            fluid={data.about.childImageSharp.fluid}
            alt="Working"
          />
        </div>
      </TextImage>
      <TextImage>
        <div className="intro reversed">
          <p>
            <strong>Why Shenzhen?</strong> In addition to being called the
            Silicon Valley of the East, Shenzhen is the epicenter of the growing
            IoT industry as well as the headquarters of all major electronics
            manufacturers. This is a city where beside millions of other
            electronic products, iPhones, Dell Laptops, Sony headsets, Microsoft
            computers are made. The place where ideas are born and turned into
            products and then sold worldwide. In the heart of Shenzhen, there is
            Huaqiangbei - the largest electronic market. A place where you can
            easily find the latest tech innovations or make a prototype of any
            product in just few steps. Although the first impression of a bunch
            of shopping malls filled with small shops is actually just a stage
            for factories that are in the background. The city, synonymous for
            the global electronic market, is also the Special Economic Zone,
            which allows significantly more favorable business and production
            conditions.
          </p>
          <Img
            draggable="false"
            fluid={data.shenzhen.childImageSharp.fluid}
            alt="Shenzhen"
          />
        </div>
      </TextImage>
    </Layout>
  )
}
