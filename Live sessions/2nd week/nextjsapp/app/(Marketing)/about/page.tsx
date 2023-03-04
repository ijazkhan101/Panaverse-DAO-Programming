import Link from "next/link"
import Image from "next/image" 

export default function Home() {
  return (
  <>
  <h1>About Us page</h1>
  <Link href={"/"}>Home</Link>

  <Image src='/data.jpg' alt="data" width='1000' height='700'></Image>
  </>
  )
}
