import '../styles/globals.css'
import { poppins } from '@/styles/fonts'

import Footer from '@/components/global/Footer'
import Nav from '@/components/global/Nav'

export const metadata = {
  title: 'Bears Digital | Empowering Brands with AI-Driven Creative & Strategic Digital Design & Development Solutions. ',
  description: 'Bears Digital Empowers Brands with AI-Driven Creative & Strategic Digital Design & Development Solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}