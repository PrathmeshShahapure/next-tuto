import React from 'react'
import Image from 'next/image';
const Photo = () => {
  return (
    <div className='flex justify-center items-center'>
     
             <Image alt="my-home" loading='eager' width={500} height={200} src="https://images.unsplash.com/photo-1768970338809-d88ab5997672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          >
              
             </Image>
    </div>
  );
}

export default Photo