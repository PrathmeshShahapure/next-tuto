import React from 'react'

const page = async({ params }: { params: Promise<{ id: string }>}) => {
    const { id } =  await params;

  return (
      <div className='m-5 text-center'> the product id is  {id }</div>
  )
}

export default page