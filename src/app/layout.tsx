import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import {ThemeProvider} from '../context/ThemeContext'; 
import AuthProvider from '@/components/AuthProvider/AuthProvider';

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
          <AuthProvider>
              <div className="container">
                <Navbar/>
                {children}
                <Footer/>
              </div>
          </AuthProvider>
        </ThemeProvider>
      </body> 
    </html>
  )
}
