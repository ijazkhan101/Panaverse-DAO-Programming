
import { Inter } from 'next/font/google'
// import styles from './page.module.css'


export default function Navbar() {
  return (
    <main>
      <div className="flex bg-gray-800 text-gray-300 justify-around flex-wrap p-3">
        <div className='px'>Home</div>
        <div>About </div>
        <div>Services </div>
        <div>Products </div>
        <div>Contact</div>
      </div>

    </main>
  )
}
