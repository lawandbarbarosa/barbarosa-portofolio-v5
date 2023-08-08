import React from 'react'
import "./about.css"
import data from "./data"

function About() {
  return (
    <div className='app__about section__padding' id='about-section  '>
      <div className="app__about-header">
      <h1>About Me</h1>
      </div>
    <div className="app__about-content">
      <div className="app__leftside">
      </div>
      <div className="app__rightside">
        {data.map((inf)=>{
          const {image,title,category,id} = inf
         return (<div className="app__content-information">
         <div className="app__lft">
          <div className="top"></div>
          <img src={image} alt="" />
          <h1>{category}</h1>
         </div>
         <div className="app__right">
          <p>{title}</p>
         </div>
          </div>)
        })}
      </div>
    </div>
    </div>
  )
}

export default About