"use client";

import { useRouter } from "next/navigation";

const Signup= () => {
    const route = useRouter();
    return <div>
      
        <button onClick={()=>route.push("/login")}>Go to Login </button>
  </div>;
};

export default Signup;
