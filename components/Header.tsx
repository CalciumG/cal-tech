import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ICategory } from '../interfaces/ICategory'

import { getCategories } from '../services/index'

interface Props {
  category: ICategory
}

const Header = () => {
  const [categories, setCategories] = useState<ICategory[]>([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="border-white-400 inline-block w-full border-b py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              Cal Tech
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
