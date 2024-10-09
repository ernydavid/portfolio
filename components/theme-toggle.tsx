'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle () {
  const { setTheme, theme } = useTheme()
  const [enabledTheme, setEnabledTheme] = React.useState('')
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    if (theme) {
      setEnabledTheme(theme)
    }
  }, [theme])

  return (
    <button
      className='hover:text-foreground transition-colors'
      ref={buttonRef}
      onClick={() => {
        const currentTheme = buttonRef.current?.textContent

        if (currentTheme === 'system') {
          setTheme('light')
        } else if (currentTheme === 'light') {
          setTheme('dark')
        } else {
          setTheme('system')
        }
      }}
    >
      {enabledTheme}
    </button>
  )
}
