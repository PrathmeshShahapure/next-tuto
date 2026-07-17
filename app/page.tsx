"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const userFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(16).optional(),
  profileUrl: z.string().url(),
  friends: z.array(z.string().min(1)),
  settings: z.object({ isOn:z.boolean(),metalName:z.string()})
})

type userForm = z.infer<typeof userFormSchema>

export default function Home() {
  const form = useForm<userForm>({resolver:zodResolver(userFormSchema)});
  return (<>
  <h1 className="mt-5 text-2xl text-center">   PhotosGram</h1>
  
      </>
  );
}
