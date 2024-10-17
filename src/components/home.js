import React from 'react'
import profile from '../images/profile.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
function Home() {
  return (
    <div className='flex flex-col md:flex-row bg-all'>
        <h1 className='w-1/2 font-bold px-10 py-36 text-4xl font-home-font'>Hello!<br/>
        <p className='font-light py-4 '>I am <span className='font-semibold '>ILAMATHI S</span></p>
        <p className='py-2 font-light'>I am a Full-Stack Developer</p><br/>
        <a href="https://www.linkedin.com/in/ilamathis/" className='pr-5 link-danger link-offset-2 link-underline-opacity-30 link-underline-opacity-100-hover  transition'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/ilamathi-s" className='link-danger link-offset-2 link-underline-opacity-30 link-underline-opacity-100-hover transition'><FontAwesomeIcon icon={faGithub} className='pr-5' /></a>
        <a href="mailto:ilamathi0005@gmail.com" className=' link-danger link-offset-2 link-underline-opacity-30 link-underline-opacity-100-hover transition' ><FontAwesomeIcon icon={faEnvelope}  /></a>
        </h1>
        <div className='w-1/3 py-5'>
            <img src={profile} alt="profile" className='rounded-full'/>
        </div>
    </div>
  )
}

export default Home