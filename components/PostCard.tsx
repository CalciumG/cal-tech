import React from 'react'
import { IPost } from '../interfaces/IPost'
import moment from 'moment'
import Link from 'next/link'

interface Props {
  post: IPost
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.node.coverImage.url}
          alt={post.node.title}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-100 hover:text-pink-600 ">
        <Link href={`/post/${post.node.title}`}>{post.node.title}</Link>
      </h1>
      <div className="bloc mb-8 w-full items-center justify-center text-center lg:flex">
        <div className="w-start mb-4 mr-8 flex lg:mb-0 lg:w-auto">
          <img
            alt={post.node.authors[0].name}
            height="60px"
            width="60px"
            className="rounded-full align-middle"
            src={post.node.authors[0].picture.url}
          />
        </div>
        <p className="ml-2 inline align-middle text-lg text-gray-700">
          {post.node.authors[0].name}
        </p>
      </div>
    </div>
  )
}

export default PostCard
