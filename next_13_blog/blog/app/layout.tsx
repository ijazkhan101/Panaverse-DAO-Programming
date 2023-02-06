import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from './utils.module.css';

const name = 'Ijaz khan';
export const siteTitle = 'Web developer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <div className='{styles.container}'>
      <div className={styles.description}>
          <h1 className={styles.center}>
          Panaverse DAO (Quarter 2)
          </h1>
      </div>
          <header className={styles.header}>
          <Link href="/">
            <Image
                priority
                src="/images/ijaz.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="profile" />
                </Link>
                <h1 className={utilStyles.headingLg}> {name} </h1>
            {children}
          </header>
        </div>
      </body>
    </html>
  )
}
