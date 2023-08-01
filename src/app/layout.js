import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from './Component/Navbar'
const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Falopapas Art Studio',
  description: 'Falpapas art studio for the cool',
}

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">

      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
