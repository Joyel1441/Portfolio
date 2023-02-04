import Navigation from '@/components/navigation'
import './globals.css'
import {VT323} from "@next/font/google"

const vt323= VT323({
  subsets: ['latin'],
  weight: ['400', '400']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={vt323.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation/>
        <div>{children}</div>
        </body>
    </html>
  )
}
