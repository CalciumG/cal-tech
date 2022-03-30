export interface IPost {
  title: string
  excerpt: string
  slug: string
  coverImage: {
    url: string
    title: string
  }
  authors: [
    {
      name: string
      picture: {
        url: string
      }
    }
  ]
  categories: [
    {
      name: string
      slug: string
    }
  ]
}
