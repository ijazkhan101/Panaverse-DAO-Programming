"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState } from 'react';
import Todo from './todo';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //const val ="hello";
  const [val ,setVal] = useState('Hello world')


  const onChangeHandler = (e : any) =>{
    console.log("e is ",e.target.value);
    setVal(e.target.value);

  }
  return (
    <main className={styles.main}>
      <div >
        <h1> TODO APP </h1>
      </div>
   

      <div>
        <Todo></Todo>
      </div>
    </main>
  )
}
