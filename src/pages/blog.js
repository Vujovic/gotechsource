import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <StaticQuery
    query={fetchPosts}
    render={data => (
      <Layout>
        <SEO title="Blog" />
        <Cards>
          <h1>Blog</h1>
          <div className="cards">
            {data.allMarkdownRemark.edges.map(edge => (
              <div className="card">
                <p>{edge.node.frontmatter.date}</p>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.excerpt}</p>
                <Link to={`blog${edge.node.frontmatter.slug}`}>Read post</Link>
              </div>
            ))}
          </div>
        </Cards>
      </Layout>
    )}
  />
)

const fetchPosts = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

const Cards = styled.section`
  min-height: calc(100vh - 327px);
  h1 {
    margin-top: 50px;
    text-align: center;
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
    margin: 50px auto;
    max-width: 960px;
    padding: 0 30px;
    .card {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      margin: 20px;
      padding: 20px 40px;
      p {
        margin: 15px auto;
        text-align: justify;
      }
      a {
        color: var(--color-primary);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .cards {
      flex-direction: column;
      .card {
        h2 {
          font-size: 18px;
        }
      }
    }
  }
`
