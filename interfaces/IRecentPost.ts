export interface IRecentPost {
  slug?: string
  categories?: [
    {
      name: string
      slug: string
    }
  ]
  title?: string
  coverImage?: {
    url?: string
  }
  createdAt?: Date
  content?: string
}
