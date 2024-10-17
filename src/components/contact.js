import React from 'react'
import { useState,useEffect,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
function Contact() {
    const [border,setBorder]=useState(false);
    const contactRef=useRef(null);
    const handleScroll = () =>{
    const top=contactRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight && top > 0){
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
    const handleCopy =(text) => {
        navigator.clipboard.writeText(text).then(()=> {
            alert('Copied to Clipboard!');
        }).catch(err =>{
            console.error("Could not copy",err);
        });
    };
  return (
    <div className='bg-all' id='contact' ref={contactRef}>
        <h1 className='font-bold text-4xl w-[160px] '>CONTACT</h1>
        <div className={`border-animate ${border ? 'visible' : ''}`}></div><br/>
        <p className=' text-2xl py-2 cursor-pointer link-secondary link-offset-2 link-underline-opacity-10 link-underline-opacity-200-hover ' onClick={() => handleCopy('ilamathi0005@gmail.com')}><span className='text-stone-800 font-semibold'>Email:  </span>ilamathi0005@gmail.com</p>
        <p className='text-2xl py-2 cursor-pointer link-secondary link-offset-2 link-underline-opacity-10 link-underline-opacity-200-hover' onClick={() => handleCopy('9342034232')}><span className='text-stone-800 font-semibold'>Phone no:  </span>9342034232</p>
    </div> 
  )
}

export default Contact