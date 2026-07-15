import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="text-center">
      PhotosGram
      <Link
        className="flex flex-col justify-center items-center m-20  "
        href="/photo"
      >
        <Image
          alt="my-home"
           className="w-auto h-auto"
          width={500}
          height={500}
          loading="eager"
          src="https://images.unsplash.com/photo-1768970338809-d88ab5997672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Image>
      </Link>
    </div>
  );
}
