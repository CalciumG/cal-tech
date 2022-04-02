import React from 'react'
import { getPostDetails, getPosts } from '../../services'
import { INodePost } from '../../interfaces/INodePost'
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from '../../components'

interface Props {
  post: INodePost
}

const PostDetails = ({ post }: Props) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.authors[0]} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget recentPost={post} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }: any) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}
