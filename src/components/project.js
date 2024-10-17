import React, {useState, useEffect,useRef } from 'react'
import Card from '../components/Card'
import pro1 from '../images/project1.jpg'
import pro2 from '../images/project2.png'
import pro3 from '../images/project3.jpg'
import pro4 from '../images/project4.png'
function Project() {
  const [border,setBorder]=useState(false);
  const project=useRef(null);
  const handleScroll = () =>{
    const top=project.current.getBoundingClientRect().top;
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
    <div className='bg-all' id='project' ref={project}>
        <h1 className='text-center font-bold text-4xl w-[170px]' >PROJECTS</h1>
        <div className={`border-animate ${border ? 'visible' : ''}`}></div>
        <div className='flex flex-wrap justify-center gap-6 p-6 border-card'>
        <Card  title='House Rental Management System' detail='This is coded using tkinter in python.' image={pro1} pro='https://github.com/ilamathi-s/tkinter-house-rental/tree/main'/> 
        <Card title='UI/UX design' detail='A UI design is designed using Figma for parents.' image={pro2} pro='https://www.figma.com/proto/rnyWgjNNVVbEz5rsuKT9c3/HHHF?node-id=0-1&t=3pztQE3Db9IE45kO-1'/>
        <Card title='Art Gallery website' detail='Website developed using HTML, CSS and JS.' image={pro3} pro='https://github.com/ilamathi-s/Art-gallery-website'/> 
        <Card title='ONGOING PRO' detail='This is developed using react, express.js, node.js and mysql database to bring a full fledged website for interactive education courses.' image={pro4} pro='https://github.com/ilamathi-s/project_1'/>
        </div>
    </div>
  )
}

export default Project