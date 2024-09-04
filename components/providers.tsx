"use client"

import {ThemeProvider, useTheme} from "next-themes"
import { ReactNode } from "react"

const providers = ({children}:{children:ReactNode}) => {
  return (
   <ThemeProvider enableSystem
   attribute="class"
   defaultTheme="system"
   disableTransitionOnChange>
    {children}
   </ThemeProvider>
  )
}

export default providers
