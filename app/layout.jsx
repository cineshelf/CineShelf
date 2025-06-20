import "./globals.css"
import { ThemeProvider } from "@/components/everywhere/ThemeProvider"

import { Montserrat } from "next/font/google"

export const metadata = {
  title: "CineShelf",
  description: "Generated by create next app",
}

/* Import Fonts */
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
