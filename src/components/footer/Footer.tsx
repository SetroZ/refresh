import React from 'react'
import Image from 'next/image'

const IconList: { id: number; alt: string; link: string }[] = [
  {
    id: 0,
    alt: 'facebook',
    link: '/facebook.svg',
  },
  {
    id: 1,
    alt: 'twitter',
    link: '/twitter.svg',
  },
  {
    id: 2,
    alt: 'instagram',
    link: '/instagram.svg',
  },
  {
    id: 3,
    alt: 'youtube',
    link: '/youtube.svg',
  },
]
const Footer = () => {
  return (
    <footer className='h-11 flex justify-between items-center'>
      <p>testiama</p>
      <div className='flex gap-1 '>
        {IconList.map((icon) => (
          <a href='https://www.boogers.com' key={icon.id}>
            <Image
              className='opacity-30'
              width={25}
              height={25}
              src={icon.link}
              alt={icon.alt}
            />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
