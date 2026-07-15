import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/data";
export default function Home() {
  
  return (<>
  <h1 className="mt-5 text-center">   PhotosGram</h1>
    <div className=" grid grid-cols-3 p-10">
   
      {images.map((i) => (
        <Link
        href={`photo/${i.id}`}
        key={i.id}
        className="flex flex-col justify-center items-center m-20  "
        >
          <Image
            alt="my-home"
            width={200}
            height={300}
            loading="eager"
            src={i.url}
            ></Image>
        </Link>
      ))}
    </div>
      </>
  );
}
