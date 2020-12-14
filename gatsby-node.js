/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { registerComponent, createResolverField } = require(`gatsby-plugin-graphql-component`)

let id = null

exports.sourceNodes = async ({ actions }) => {
  id = await registerComponent({
    component: require.resolve(`./src/components/Alpha`),
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      Alpha: createResolverField({
        resolve: async () => id,
      }),
    },
  }
  createResolvers(resolvers)
}
