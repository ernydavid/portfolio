'use client'

import { useState, useEffect } from 'react'
import { subscribeUser, unsubscribeUser, sendNotification } from '@/actions/notifications'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { XIcon } from 'lucide-react'

function urlBase64ToUint8Array (base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    .replace(/\\-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export function PushNotificationManager () {
  const [isSupported, setIsSupported] = useState(false)
  const [closed, setIsClosed] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  )
  const [message, setMessage] = useState('')

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true)
      registerServiceWorker()
    }
  }, [])

  async function registerServiceWorker () {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none'
    })
    const sub = await registration.pushManager.getSubscription()
    setSubscription(sub)
  }

  async function subscribeToPush () {
    const registration = await navigator.serviceWorker.ready
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      )
    })
    setSubscription(sub)
    await subscribeUser(sub)
  }

  async function unsubscribeFromPush () {
    await subscription?.unsubscribe()
    setSubscription(null)
    await unsubscribeUser()
  }

  async function sendTestNotification () {
    if (subscription) {
      await sendNotification(message)
      setMessage('')
    }
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>
  }

  return (
    <div className={cn(
      'w-full px-8 py-2 flex items-center bg-secondary/30 backdrop-blur-md fixed top-0 left-0 z-10',
      closed && 'hidden'
    )}
    >
      {subscription
        ? (
          <div className='flex flex-col space-y-2'>
            <div className='flex items-center gap-2'>
              <p className='text-muted-foreground text-sm'>You are subscribed to push notifications.</p>
              <Button onClick={unsubscribeFromPush}>Unsubscribe</Button>
            </div>
            <div className='flex items-center gap-4'>
              <Input
                type='text'
                placeholder='Enter notification message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button onClick={sendTestNotification}>Send Test</Button>
            </div>
          </div>
          )
        : (
          <div className='w-full flex items-center gap-3 justify-between text-sm text-muted-foreground'>
            <div className='flex items-center gap-2'>
              <p className='line-clamp-1'>You are not subscribed to push notifications.</p>
              <Button
                size='sm'
                className='h-7'
                onClick={subscribeToPush}
              >Subscribe
              </Button>

            </div>
            <Button
              className='w-7 h-7 flex-shrink-0'
              size='icon'
              variant='outline'
              onClick={() => setIsClosed(true)}
            >
              <XIcon className='w-3 h-3' />
            </Button>
          </div>
          )}
    </div>
  )
}
