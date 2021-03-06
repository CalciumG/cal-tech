import { stringify } from 'querystring'
import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services/index'

interface Props {
  slug: string
}

const CommentsForm = ({ slug }: Props) => {
  const [error, setError] = useState(false)
  const [showSucessMessage, setShowSucessMessage] = useState(false)
  const commentEl = useRef<HTMLTextAreaElement>(null)
  const nameEl = useRef<HTMLInputElement>(null)
  const emailEl = useRef<HTMLInputElement>(null)
  const storedDataEl = useRef<HTMLInputElement>(null)

  const handleCommentSubmission = () => {
    setError(false)

    const comment = commentEl.current!.value
    const name = nameEl.current!.value
    const email = emailEl.current!.value
    const storeData = storedDataEl.current!.value

    if (!comment || !email || !name) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if (storeData) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('name')
      localStorage.removeItem('email')
    }

    submitComment(commentObj).then((res) => {
      setShowSucessMessage(true)
      setTimeout(() => {
        setShowSucessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Comments Form
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-gray-100 p-4 outline-none focus:ring-2 focus:ring-gray-100"
          placeholder="Comment..."
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-gray-100 py-2 px-4 outline-none focus:ring-2 focus:ring-gray-100"
          placeholder="Name..."
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="w-full rounded-lg bg-gray-100 py-2 px-4 outline-none focus:ring-2 focus:ring-gray-100"
          placeholder="example@gmail.com"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div className="container">
          <input
            ref={storedDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true "
          />
          <label
            className="ml-2 cursor-pointer text-gray-500"
            htmlFor="storeData"
          >
            Save my email and name for the next time I comment
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg text-white transition duration-500 hover:bg-indigo-900"
        >
          Post Comment
        </button>
        {showSucessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
