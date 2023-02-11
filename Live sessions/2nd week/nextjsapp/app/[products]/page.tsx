import Link from "next/link"
import Image from "next/image" 

export default function Home({params} : { params :{products: string}}) {

  return (
  <>
  <h1>Products Page</h1>
  <Link href={"/"}>Home</Link>
    <div>
    The products is {params.products}
    </div>
   
  </>
  )
}


