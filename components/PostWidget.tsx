import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { IRecentPost } from '../interfaces/IRecentPost'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services/index'

interface Props {
  recentPost: IRecentPost
}

const PostWidget = ({ recentPost }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<IRecentPost[]>([])

  useEffect(() => {
    if (recentPost.slug && recentPost.categories) {
      getSimilarPosts(recentPost.slug, recentPost.categories).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [recentPost.slug])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 text-gray-700 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {recentPost.slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.slug} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="rounded-full align-middle"
              src={post.coverImage!.url}
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-lg text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
