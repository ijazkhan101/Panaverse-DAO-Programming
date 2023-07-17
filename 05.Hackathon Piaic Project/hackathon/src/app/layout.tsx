import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/viwes/Navbar'
import { Wrapper } from '@/components/shared'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce ',
  description: 'E-commerce ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
        <Navbar/>
        {children}
        </Wrapper>
        </body>
    </html>
  )
}
