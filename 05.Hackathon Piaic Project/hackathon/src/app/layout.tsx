import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/viwes/Navbar'

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
        <Navbar/>
        {children}</body>
    </html>
  )
}
