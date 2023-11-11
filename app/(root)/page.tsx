import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <h1>fack</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}