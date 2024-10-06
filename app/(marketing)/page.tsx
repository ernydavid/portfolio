import Image from 'next/image'
import Link from 'next/link'

const data = {
  name: 'Erny Salcedo',
  profession: 'UX designer / Frontend developer',
  image: 'https://unavatar.io/ernydavid',
  description: '',
  workExperience: [
    {
      period: '2021 - Now',
      companyName: '5999Cargo Group.',
      function: 'Marketing Designer & Web developer.',
      urlCompany: '#'
    },
    {
      period: '2019 - 2021',
      companyName: 'Freelancer.',
      function: 'Web developer & UX Designer.',
      urlCompany: '#'
    }
  ]
}

export default function Home () {
  return (
    <main className='w-full max-w-2xl min-h-screen'>
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
        <div className='w-6 h-6 rounded-full overflow-hidden'>
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
        <p className='text-muted-foreground text-pretty'>I'm a frontend developer, passionate about creating <Link className='text-primary' href='/projects'>digital experiences</Link> that combine elegance, simplicity, and functionality. I specialize in building custom solutions, from <Link className='text-primary' href='/pages'>static websites</Link> to <Link className='text-primary' href='/jobs'>dynamic platforms</Link>, always paying attention to every detail to deliver flawless and professional results.</p>
      </section>
      <section className='flex flex-col space-y-6 pt-12'>
        <h3 className='font-medium'>Work Experience:</h3>
        {data.workExperience.map((item, index) => (
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
    </main>
  )
}
