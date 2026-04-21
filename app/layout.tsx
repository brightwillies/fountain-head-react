import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fountainhead Christian School',
  description: 'Fountainhead Christian School is a private school in Ghana',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
