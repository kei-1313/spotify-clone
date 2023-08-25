import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Siderbar from '@/components/Siderbar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Siderbar>
          {children}
        </Siderbar>
      </body>
    </html>
  )
}
