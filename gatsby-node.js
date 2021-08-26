exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(`
    {
      allAboutJson {
        nodes {
          slug
          image
        }
      }
      allToursJson {
        nodes {
          slug
          image
        }
      }
    }
  `)
  if (results.error) {
    console.log(results.error)
  }
  results.data.allAboutJson.nodes.forEach(node => {
    createPage({
      path: `/about/${node.slug}`,
      component: require.resolve("./src/template/about.js"),
      context: {
        slug: node.slug,
        image: node.image,
      },
    })
  })
  results.data.allToursJson.nodes.forEach(node => {
    createPage({
      path: `/tours/${node.slug}`,
      component: require.resolve("./src/template/tour.js"),
      context: {
        slug: node.slug,
        image: node.image,
      },
    })
  })
}
