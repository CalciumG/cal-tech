import type { NextPage } from 'next'
import { IPost } from '../interfaces'
import Categories from '../components/Categories'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import { getPosts } from '../services/index'

// const posts: { title: string; excerpt: string }[] = [
//   { title: 'React Typescript', excerpt: 'Learn React with Tailwind' },
//   { title: 'Not Vue', excerpt: 'I prefer Vue' },
// ]

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <title>Create Next App</title>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: IPost) => (
            <PostCard post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 text-white lg:sticky">
            <PostWidget recentPost={posts[0]} />
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  console.log(posts)

  return {
    props: { posts },
  }
}

export default Home
