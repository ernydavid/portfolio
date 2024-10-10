import { AstroIcon, GithubIcon, NextJsIcon, PostgresIcon, ReactIcon, StrapiIcon, StripeIcon, SupabaseIcon, TailwindIcon, TypeScriptIcon } from '@/components/icons'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { ExternalLink, Frown } from 'lucide-react'
import { Project, WorkExperience } from '@/lib/types'
import { getPortfolioData } from '@/actions/data'

export default async function Home () {
  const data = await getPortfolioData()

  if (!data) {
    return (
      <div className='min-h-svh flex flex-col gap-2 text-center items-center justify-center text-muted-foreground'>
        <Frown className='w-4 h-4' />
        <p>Opps... Not Content!</p>
      </div>
    )
  }

  return (
    <>
      <main className='w-full min-h-svh pb-12'>
        <header className='flex justify-between items-center pt-12'>
          <h1 className='w-full max-w-xs font-medium transition-element inline-block flex-grow'>
            <span className='block overflow-hidden transition-all group relative'>
              <span className='inline-block group-hover:-translate-y-full transition-all ease-in-out'>
                {data.name}
              </span>
              <span className='inline opacity-0 group-hover:opacity-100 absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
                {data.profession}
              </span>
            </span>
          </h1>
          <div className='w-6 h-6 overflow-hidden'>
            <Image
              width={24}
              height={24}
              className='object-cover overflow-hidden'
              src={data.image}
              alt={`${data.name}'s image profile`}
            />
          </div>
        </header>

        <section className='w-full flex space-y-6 flex-col pt-12'>
          <p className='text-muted-foreground text-pretty'>I'm a frontend developer, passionate about creating <Link className='text-primary' href='#projects'>projects</Link> that combine elegance, simplicity, and functionality. I specialize in building custom solutions, from <Link className='text-primary' href='/pages'>static websites</Link> to <Link className='text-primary' href='/jobs'>dynamic platforms</Link>, always paying attention to every detail to deliver flawless and professional results.</p>
        </section>
        <section className='flex flex-col space-y-6 pt-12'>
          <h3 className='font-medium'>Work:</h3>
          {data.workExperience.map((item: WorkExperience, index: number) => (
            <article
              key={`job-${index + 1}`}
              className='flex flex-col text-muted-foreground'
            >
              <header>
                <span>{item.period}</span>
              </header>
              <div className='space-x-1'>
                <Link
                  href={item.urlCompany}
                  className='text-primary'
                >
                  {item.companyName}
                </Link>
                <span>{item.function}</span>
              </div>
            </article>
          ))}
        </section>

        <section className='flex flex-col space-y-6 pt-12'>
          <h3 className='font-medium'>Skills:</h3>
          <ul className='flex flex-wrap items-center gap-3'>
            <ReactIcon size='w-8 h-8 stroke-1 text-muted-foreground hover:text-primary transition-colors ease-linear' />
            <NextJsIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <PostgresIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <TypeScriptIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <TailwindIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <GithubIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <AstroIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <StripeIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <SupabaseIcon
              strokeWidth={0}
              size='w-8 h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
            <StrapiIcon
              strokeWidth={0}
              size='h-8 text-muted-foreground hover:text-primary transition-colors ease-linear'
            />
          </ul>
        </section>

        <section
          id='projects'
          className='flex flex-col space-y-6 pt-12'
        >
          <h3 className='font-medium'>Projects:</h3>
          {data.projects.map((item: Project, index: number) => (

            <Link
              className='w-full h-full group'
              key={`project-${index + 1}`}
              href={`/projects/${item.slug}`}
            >
              <article className='flex flex-col space-y-2'>
                <header>
                  <div className='flex items-center justify-start gap-2'>
                    <h3 className='group-hover:text-primary transition-colors font-medium'>{item.title}</h3>
                    <ExternalLink className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground' />
                  </div>
                  <p className='text-muted-foreground group-hover:text-muted-foreground/80'>{item.description}</p>
                </header>
                <ul className='flex items-center flex-wrap gap-1'>
                  {item.stack.map((item) => (
                    <li
                      className='px-3 py-1 bg-secondary group-hover:bg-secondary/70 transition-colors rounded-sm text-muted-foreground tracking-tighter text-sm'
                      key={item}
                    >{item}
                    </li>
                  ))}
                </ul>
              </article>
            </Link>

          ))}
        </section>
      </main>
    </>
  )
}
