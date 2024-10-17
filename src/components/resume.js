import React from 'react'
import { useState,useEffect,useRef } from 'react'
import resume from '../images/resume1.png'
import resumeFile from '../files/Ilamathi_Resume.pdf'
import 'bootstrap/dist/css/bootstrap.min.css'
function Resume() {
  const [border,setBorder]=useState(false);
  const resumeRef=useRef(null);
  const handleScroll = () =>{
    const top=resumeRef.current.getBoundingClientRect().top;
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
    <div className='items-center bg-all' id='resume' ref={resumeRef}>
        <h1 className='text-center font-bold text-4xl  w-[150px] '>RESUME</h1>
        <div className={`border-animate ${border ? 'visible' : ''}`}></div>
        <div className='d-flex align-items-center'>
        <img src={resume} alt="Resume"  className='w-1/3 py-4'/>
        <div className='ml-4'>
        <p className='text-xl ' >Look out my Resume here!!</p>
        <a href={resumeFile} className='btn btn-outline-danger mb-10'>Show Resume</a>
    </div>
    </div>
    </div>
  )
}

export default Resume