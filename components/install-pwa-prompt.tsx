'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InstallPrompt () {
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    )

    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
  }, [])

  if (isStandalone) {
    return null // Don't show install button if already installed
  }

  return (
    <div className={cn(
      'w-full fixed bottom-0 left-0 bg-secondary/60 flex justify-between items-center px-8 py-3 backdrop-blur-md',
      isClosed && 'hidden'
    )}
    >
      <h3 className='text-muted-foreground text-sm'>Install App?</h3>
      <div className='flex items-center gap-4'>
        <Button>
          Add to Home Screen
        </Button>
        <Button
          variant='outline'
          size='icon'
          onClick={() => setIsClosed(true)}
        >
          <XIcon className='w-4 h-4' />
        </Button>
      </div>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role='img' aria-label='share icon'>
            {' '}
            ⎋{' '}
          </span>
          and then "Add to Home Screen"
          <span role='img' aria-label='plus icon'>
            {' '}
            ➕{' '}
          </span>.
        </p>
      )}
    </div>
  )
}
