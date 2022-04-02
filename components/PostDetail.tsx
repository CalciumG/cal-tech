import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }: any) => {
  const getContentFragment = (
    index: number,
    text: any,
    obj: any,
    type: any
  ) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

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
        <div className="mb-6 flex w-full border-b">
          <div className="bloc mb-6 w-full items-center justify-start text-center lg:flex">
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

        {post.content.raw.children.map((typeObj: any, index: number) => {
          const children = typeObj.children.map(
            (item: any, itemindex: number) =>
              getContentFragment(itemindex, item.text, item, undefined)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail
