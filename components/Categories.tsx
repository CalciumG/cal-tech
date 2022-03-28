import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ICategory } from '../interfaces/ICategory'

import { getCategories } from '../services/index'

interface Props {
  category: ICategory
}

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 text-gray-700 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
