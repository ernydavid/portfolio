import { Navbar } from '@/components/navbar/navbar'

export default function RootLayout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className='w-full min-h-screen relative'>
      <Navbar />
      <div className='w-full flex flex-col'>
        {children}
      </div>
    </div>
  )
}
