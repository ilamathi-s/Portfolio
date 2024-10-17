import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Card(props) {
  return (
    <div className='card w-[18rem] px-6 border-card'>
        <img className='card-img-top py-3' src={props.image} alt="pro_image"/>
        <div className='card-body'>
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-text'>{props.detail}</p>
            <a  type="button" href={props.pro} className='btn btn-outline-danger'>View source</a>
        </div>
    </div>
  ) 
}

export default Card;