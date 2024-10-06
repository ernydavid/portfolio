import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata: Metadata = {
  title: 'Erny Salcedo',
  description: 'Web portfolio of Erny Salcedo',
  icons: {
    icon: [
      {
        href: '/icon.png',
        url: '/icon.png'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
    >
      <body
        className={cn(
          'w-full antialiased font-sans min-h-screen bg-background text-foreground tracking-tight flex justify-center md:p-0 p-8 pt-0 md:pt-10 pb-[calc(0.5rem+env(safe-area-inset-bottom))] md:pb-0',
          fontSans.variable
        )}
      >
        <TooltipProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
          >
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
