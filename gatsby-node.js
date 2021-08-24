exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(`
    {
      allAboutJson {
        nodes {
          slug
        }
      }
      allToursJson {
        nodes {
          slug
        }
      }
    }
  `)
  if (results.error) {
    console.log(results.error)
  }
  results.data.allAboutJson.nodes.forEach(node => {
    console.log(node.slug)
    createPage({
      path: `${node.slug}`,
      component: require.resolve("./src/template/about.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  results.data.allToursJson.nodes.forEach(node => {
    console.log(node.slug)
    createPage({
      path: `/tours/${node.slug}`,
      component: require.resolve("./src/template/tour.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
