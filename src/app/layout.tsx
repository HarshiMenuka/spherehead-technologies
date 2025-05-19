import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { inter, poppins } from './fonts'
import ClientInit from '@/components/ClientInit'

export const metadata: Metadata = {
  title: 'Spherehead Technologies',
  description: 'Innovative digital solutions for businesses',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/spherehead.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body suppressHydrationWarning>
        <ClientInit />
        <Nav/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}