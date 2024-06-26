import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
const Button = () => {

    const buttonData = [{
        id : 1,
        name: "Wedding",
        path : "/wedding"
    },
    {
        id : 2,
        name: "Event & Corporate",
        path : "/event"
    },
    {
        id : 3,
        name: "architecture Photography",
        path : "/architecturePhotography"
    },
    {
        id : 4,
        name: "Fashions & Portraits",
        path : "/fashionAndPortraits"
    },
    {
        id : 5,
        name: "E-Commerce",
        path : "/Ecommerce"
    },
    {
        id : 6,
        name: "Baby & Maternity",
        path : "/babyAndMaternity"
    },
]
  return (
    <div className="buttons">
    
      {buttonData.map((data)=>{
        return(
          <Link to={data.path}  key={data.id}>
             <button className="blob-btn" >
                {data.name}
             <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>
    </button>         
    </Link>
        )
      })}
 
    <br/>
  
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
      </filter>
    </defs>
  </svg>
  </div>
  )
}

export default Button