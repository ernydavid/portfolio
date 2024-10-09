import { data } from '@/data/portfolio-data'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

export default function Page ({ params }: {
  params: {
    slug: string
  }
}) {
  const slug = params.slug
  const project = data.projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className='w-full min-h-svh flex flex-col justify-center items-center text-center'>
        <img
          className='w-full h-32 object-cover object-center rounded-2xl transition-image'
          src='/icon-192x192.png'
          alt='image profile'
        />
        <p>Oppss.. Project not found!</p>
      </div>
    )
  }

  return (
    <>
      <main className='w-full max-w-2xl min-h-svh'>
        <header className='flex justify-between pt-12'>
          <h1 className='w-full max-w-md font-medium inline-block flex-grow'>
            <span className='relative flex flex-col'>
              <span className='inline-block fade-in'>
                {project.title}
              </span>
              <Link
                href='/'
                className='fade-in'
              >
                {data.name}
              </Link>
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

        <div className='pt-20'>
          <article
            className='flex flex-col space-y-4 transition-article'
          >
            <header>
              <video
                className='w-full h-full aspect-video object-cover object-center rounded-2xl'
                src={project.image}
                autoPlay
                loop
              />
            </header>
            <div className='space-y-2'>
              <p className='text-primary font-medium'>{project.title}</p>
              <p>{project.description}</p>
              <ul className='flex items-center flex-wrap gap-1'>
                {project.stack.map((item) => (
                  <li
                    className='px-3 py-1 bg-secondary group-hover:bg-secondary/70 transition-colors rounded-sm text-muted-foreground tracking-tighter text-sm'
                    key={item}
                  >{item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
