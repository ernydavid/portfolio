'use client'

import { Link } from 'next-view-transitions'
import { data } from '@/data/portfolio-data'
import { ThemeToggle } from './theme-toggle'

export function Footer () {
  const { socials } = data
  return (
    <footer className='w-full flex justify-center items-center gap-3 md:gap-5 text-muted-foreground py-6 flex-wrap'>
      {socials.map(item => (
        <Link
          key={item.user}
          className='hover:text-foreground transition'
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
      <ThemeToggle />
    </footer>
  )
}
