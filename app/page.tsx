import { z } from "zod"

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(16).optional(),
  profileUrl: z.string().url(),
  friends: z.array(z.string().min(1)),
  settings: z.object({ isOn:z.boolean(),metalName:z.string()})
})



export default function Home() {
 
  type Users = z.infer<typeof userSchema>
  
   const user1:Users = {
    name: "Prathmesh",
    email: "prath@ga.co",
    age: 20,
    profileUrl: "http://prathlive",
    friends: ["Prathmesh", "Pratik"],
    settings: {isOn:false,metalName:"iron_721"}
  }

  const user2 = {
    name: "Prathmesh",
    email: "prath@ga.co",
    age: 20,
    profileUrl: "http://prathlive",
    friends: ["Prathmesh", "Pratik"],
    settings: {isOn:false,metalName:"iron_721"}
  }
  
    const InvalidUser = {
  name:1
}
console.log(userSchema.parse(user1));
console.log(userSchema.parse(user2));
console.log(userSchema.safeParse(InvalidUser));

  return (<>
  <h1 className="mt-5 text-2xl text-center">   PhotosGram</h1>
  
      </>
  );
}
