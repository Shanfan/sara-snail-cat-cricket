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
  const currentDate = new Date();

  return (
    <html lang="en">
      <body className={roboto.className}
        suppressHydrationWarning={true}>
        {children}
        <footer>
          <p>
            &copy; Copyright Shanfan Huang <span>{currentDate.getFullYear()}</span>
          </p>
        </footer>
      </body>
    </html>
  )
}
