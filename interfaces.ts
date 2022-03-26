export interface IPost {
  node: {
    title: string
    excerpt: string
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
  }
}
