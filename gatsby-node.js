const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(edge => {
        actions.createPage({
          path: `blog${edge.node.frontmatter.slug}`,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: edge.node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}
