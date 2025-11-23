import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ameerat Al Arab - Luxury Perfume',
  description: 'Experience the luxury of Ameerat Al Arab perfume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
