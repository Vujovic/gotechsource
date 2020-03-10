import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "services.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Services>
      <h1>Services</h1>
      <section className="intro">
        <div className="text">
          <h2>We act as your outsourced purchaser!</h2>
          <p>
            We work on behalf of our customers, not our suppliers. We are not a
            trading company, instead we search, identify and source suppliers of
            products according to our customers demands. We act as an external
            procurement consultant and assist with everything from supplier
            assessments to actively managing the entire purchasing process. We
            handle all communications with suppliers. On behalf of our
            customers, we take an active role during the whole purchasing
            process monitoring the entire flow of information and products from
            supplier sourcing to final delivery.
          </p>
        </div>
        <Img fluid={data.image.childImageSharp.fluid} />
      </section>
    </Services>
  )
}

const Services = styled.section`
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
    .text {
      max-width: 40%;
      text-align: justify;
    }
  }
  @media screen and (max-width: 1280px) {
    .intro {
      .gatsby-image-wrapper {
        width: 30%;
      }
    }
  }
  @media screen and (max-width: 868px) {
    .intro {
      flex-direction: column-reverse;
      .gatsby-image-wrapper {
        min-width: 60%;
      }
      .text {
        margin-top: 20px;
        max-width: 100%;
        padding: 0 20px;
      }
    }
  }
`
