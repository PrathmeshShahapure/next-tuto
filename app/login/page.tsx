"use client"

import { useRouter } from "next/navigation"

const page = () => {

    const router = useRouter();
  return (
      <div>
          <button onClick={() => router.back()}  > move back (sign in )</button>
    </div>
  )
}

export default page