'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/footer/Footer'
import { SessionProvider } from 'next-auth/react'
import useTheme from './hooks/useTheme'
import DarkMode from '@/components/navbar/DarkMode'
export const metadata: Metadata = {
  title: 'testa Dev',
  description: 'testa dev page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, toggleDarkMode] = useTheme()
  return (
    <html lang='en ' className={darkMode}>
      <body
        className='flex flex-col justify-between 
        bg-gray-100
      dark:bg-black dark:text-white transition-colors duration-500 
      '
      >
        <SessionProvider>
          <header className=' w-[100%]'>
            <Navbar>
              <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Navbar>
          </header>
          <main className=''>{children}</main>
        </SessionProvider>

        <Footer />
      </body>
    </html>
  )
}
