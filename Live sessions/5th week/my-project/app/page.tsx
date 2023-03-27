import Image from 'next/image'
//import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import About from '@/components/About'


export default function Home() {
  return (
   <>
   <Navbar/>
   <About />

   </>
  )
}
