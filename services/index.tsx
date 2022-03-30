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

  return result.postsConnection.edges
}
export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `

  const result = await request(
    'https://api-eu-west-2.graphcms.com/v2/cl0wnvdb42d7001xvfwig6hsm/master',
    query,
    { slug }
  )
  return result.post
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        coverImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(
    'https://api-eu-west-2.graphcms.com/v2/cl0wnvdb42d7001xvfwig6hsm/master',
    query
  )

  return result.posts
}

export const getSimilarPosts = async (slug: string, categories: string[]) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        coverImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(
    'https://api-eu-west-2.graphcms.com/v2/cl0wnvdb42d7001xvfwig6hsm/master',
    query,
    { categories, slug }
  )
  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(
    'https://api-eu-west-2.graphcms.com/v2/cl0wnvdb42d7001xvfwig6hsm/master',
    query
  )
  return result.categories
}
