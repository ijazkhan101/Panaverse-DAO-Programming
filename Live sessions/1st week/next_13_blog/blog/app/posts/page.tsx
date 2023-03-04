'use client';
import {Inter } from '@next/font/google';
import styles  from './page.module.css';
import Link from 'next/link';
import { useRouter  } from 'next/navigation';

const inter = Inter({subsets :['latin']});

export default function Posts(){
  const router = useRouter();
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
          Post page
          </p>
          <Link href='/'>Back to Home</Link>
          {/*<button type='button' onClick={() => router.push('/')}>
          Back to home
            </button>*/}
        </div>
      </main>
    )
}