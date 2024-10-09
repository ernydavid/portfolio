import { Footer } from '@/components/footer'

export default function MarketingLayout ({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='w-full max-w-2xl min-h-svh flex flex-col items-center mx-auto'>
      {children}
      <Footer />
    </div>
  )
}
