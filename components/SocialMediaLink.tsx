import Link from 'next/link'
import React from 'react'
import { SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si'

const SocialMediaLink = () => {
  return (
    <div className='flex gap-8'>
      <Link href="https://www.linkedin.com/in/gustavo-angelo-cavalcante-da-costa/" target="_blank" className='icon-bg'>
        <SiLinkedin size={36} />
      </Link>
      
      <Link href="https://github.com/Gugangelo" target="_blank" className='icon-bg'>
        <SiGithub size={36} />
      </Link>
      
      <Link href="https://wa.me/5585988893259" target="_blank" className='icon-bg'>
        <SiWhatsapp size={36} />
      </Link>
    </div>
  )
}

export default SocialMediaLink