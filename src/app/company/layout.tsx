import PrimaryNavbar from '@components/PrimaryNavbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <PrimaryNavbar />
      <div className="h-16 min-w-max bg-intensity-bar"></div>
      <div>{children}</div>
    </main>
  )
}