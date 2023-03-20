import './globals.css'
import Header from './components/Header'
export const metadata = {
  title: 'Panaverse Website',
  description: 'Panaverse Website using Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
