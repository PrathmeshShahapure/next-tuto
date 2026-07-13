import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex gap-2 m-5 justify-center">
      <Link className="border p-1 rounded" href={"/products/all-products"}>
        All Products
      </Link>
      <Link className="border p-1 rounded" href={"/products/specific-products-1"}>
        Specific Product
      </Link>
    </div>
  );
}

export default page