import { request, gql } from 'graphql-request'

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            authors {
              bio
              id
              name
              picture {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            coverImage {
              url
            }
            categories {
              slug
              name
            }
          }
        }
      }
    }
  `

  const result = await request(
    'https://api-eu-west-2.graphcms.com/v2/cl0wnvdb42d7001xvfwig6hsm/master',
    query
  )
  console.log(result)

  return result.postsConnection.edges
}
