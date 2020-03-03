import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPost = props => (
  <Layout>
    <SEO title={props.data.markdownRemark.frontmatter.title} />
    <Post>
      <Img
        className="featured"
        fluid={
          props.data.markdownRemark.frontmatter.featuredImage.childImageSharp
            .fluid
        }
        alt="Manufacturing"
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p className="date">{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html,
        }}
      />
    </Post>
  </Layout>
)

export const postQuery = graphql`
  query getPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Post = styled.article`
  margin: 50px auto;
  max-width: 960px;
  padding: 0 30px;
  h1,
  h2,
  .date {
    text-align: center;
  }

  p {
    text-align: justify;
  }
  div > p {
    margin: 20px 0;
  }
`

export default BlogPost
