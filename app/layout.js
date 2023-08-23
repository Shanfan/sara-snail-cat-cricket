import './globals.css'
import { Roboto_Serif } from 'next/font/google'

const roboto = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
})

export const metadata = {
  title: 'The Tale of Sara Snail and Cathy Cricket',
  description: 'An interactive comic book, combining graphic novel artistry with modern web user experience, handcrafted by Shanfan Huang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}
        suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
