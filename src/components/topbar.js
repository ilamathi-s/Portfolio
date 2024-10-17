import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
function Topbar() {
    const [toggleMenu,setToggleMenu] =useState(false);
    return (
    <div className='flex justify-between px-5 py-3  font-bold text-style border-b-4 border-[#fd3104] bg-all'>
        <h2>PORTFOLIO</h2>
        <div>
        <nav className='hidden md:block'>
        <ul className='flex text-styles'>
            <li><a href="/" className='link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>HOME</a></li>
            <li><a href="#about" className='link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>ABOUT</a></li>
            <li><a href="#project" className='link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>PROJECTS</a></li>
            <li><a href="#resume" className='link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>RESUME</a></li>
            <li><a href="#contact" className='link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>CONTACT</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className='block md:hidden navigation'>
        <ul className='flex flex-col text-styles'>
            <li><a href="/" className='text-danger'>HOME</a></li>
            <li><a href="#about" className='text-danger'>ABOUT</a></li>
            <li><a href="#project" className='text-danger'>PROJECTS</a></li>
            <li><a href="#resume" className='text-danger'>RESUME</a></li>
            <li><a href="#contact" className='text-danger'>CONTACT</a></li>
        </ul>
        </nav>
        } </div>
        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><FontAwesomeIcon icon={faCaretDown} /></button>
    </div>
  )
}

export default Topbar