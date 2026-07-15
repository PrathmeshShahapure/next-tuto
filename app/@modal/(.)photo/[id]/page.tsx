import React from 'react'
import Image from 'next/image'
import { images } from "@/data/data";
const Shortview = async({ params }: { params: Promise<{id:string} >}) => {

  const { id } = await params;

  const IMG = images.find((i) => +id === i.id);
  return (
    <div className="  fixed inset-0 bg-black/50 min-h-screen  flex justify-center items-center">
      <Image
        alt="my-home"
        priority
        loading='eager'
        className="z-10 bg-white p-5 "
        width={400}
        height={600}
        src={ IMG?.url}
      ></Image>
    </div>
  );
}

export default Shortview