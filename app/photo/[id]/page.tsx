
import Image from 'next/image';
import { images } from "@/data/data";
const Photo = async({ params }: { params: Promise<{id:string}> }) => {
   
  const { id } = await params;

  const IMG = images.find((i) => +id === i.id)
  
  return (
    <div className='flex justify-center items-center'>
     
      <Image alt="my-home" loading='eager' width={500} height={200} src={IMG?.url }
          >
              
             </Image>
    </div>
  );
}

export default Photo