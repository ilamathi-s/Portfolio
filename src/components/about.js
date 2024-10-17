import React from 'react'
import { useState,useEffect,useRef } from 'react';
import about from '../images/about1.png'
function About() {
  const [border,setBorder]=useState(false);
  const aboutRef=useRef(null);
  const handleScroll = () =>{
    const top=aboutRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight && top>0){
      setBorder(true);
} else{
  setBorder(false);
} };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    };
  }, []); 
  return (
    <div className='flex bg-all' id='about' ref={aboutRef}>
         <img src={about} alt="about" className='w-1/2 px-5 py-5'/>
        <div className='px-5 py-32'>
        <h1 className='font-bold text-4xl  w-[130px]'>ABOUT</h1>
        <div className={`border-animate ${border ? 'visible' : ''}`}></div><br/>
        <p className='text-1xl py-1'>I am currently developing my skills in frontend technologies such as React, Bootstrap, and Tailwind CSS, as well as backend frameworks like Express.js and Node.js.</p>
        <p className='text-1xl py-1'>I work with databases including MySQL and MongoDB, continuously enhancing my database management skills. </p>
        <p className='text-1xl py-1'>Additionally, I am proficient with tools like Git, GitHub, and Figma.</p></div>
    </div>
  )
}

export default About