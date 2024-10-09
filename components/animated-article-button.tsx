'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { ReactNode } from 'react'

export function AnimatedArticle ({ children, href }: {
  children: ReactNode
  href: string
}) {
  const router = useTransitionRouter()
  return (
    <button
      onClick={() => {
        router.push(href)
      }}
    >
      {children}
    </button>
  )
}
