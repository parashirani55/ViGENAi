import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home(){
  return (
    <div>
      <h2>Hello</h2>
      <Button>Submit</Button>
      

      <UserButton />
    </div>
  )
}