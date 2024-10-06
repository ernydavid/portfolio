import type { MetadataRoute } from 'next'

export default function manifest (): MetadataRoute.Manifest {
  return {
    name: 'Erny Salcedo',
    short_name: 'Erny Salcedo',
    description: 'Erny Salcedo\'s Portfolio',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#141414',
    theme_color: '#141414',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
