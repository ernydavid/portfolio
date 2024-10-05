import { Dock, DockIcon } from '../magicui/dock'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '../theme-toggle'
import { routes } from '@/data/routes'

export function Navbar () {
  return (
    <header className='w-full flex justify-center items-center fixed top-0 left-0'>
      <Dock
        className='mt-0 my-4'
        direction='middle'
      >
        {routes.map((route) => (
          <DockIcon key={route.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={route.href}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full'
                  )}
                >
                  <route.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent side='bottom' align='center'>
                <p>{route.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation='vertical' className='h-full py-2' />
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </header>
  )
}
