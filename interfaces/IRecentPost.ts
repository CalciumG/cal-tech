export interface IRecentPost {
  slug?: string
  categories?: string[]
  title?: string
  coverImage?: {
    url?: string
  }
  createdAt?: Date
  content?: string
}
