import '../styles/globals.css'
import { poppins } from '@/styles/fonts'

import Footer from '@/components/global/Footer'
import Nav from '@/components/global/Nav'

export const metadata = {
  title: 'Bears Digital | Helping Businesses Grow through Creative Digital Design and Development Solutions.',
  description: 'Bears Digital Empowers Business Growth through Creative & Strategic Digital Design & Development Solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col items-center ${poppins.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}