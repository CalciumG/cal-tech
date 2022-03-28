import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }: any) => {
  console.log(post)
  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.coverImage.url}
          alt={post.title}
          className="h-full w-full object-top"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full ">
          <div className="bloc mb-8 w-full items-center justify-start text-center lg:flex">
            <div className="w-start mb-4 mr-8 flex lg:mb-0 lg:w-auto">
              <img
                alt={post.authors[0].name}
                height="60px"
                width="60px"
                className="rounded-full align-middle"
                src={post.authors[0].picture.url}
              />
            </div>
            <p className="ml-2 inline align-middle text-lg text-gray-700">
              {post.authors[0].name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <span className="font-lg text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content}
      </div>
    </div>
  )
}

export default PostDetail
