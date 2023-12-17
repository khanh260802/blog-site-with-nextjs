import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import {ThemeProvider} from '../context/ThemeContext'; 



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khanhdev',
  description: 'My first nextjs project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body> 
    </html>
  )
}
