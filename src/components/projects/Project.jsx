
import React, { useState } from 'react'
import "./pro.css"
import Projects from './pro'
import { easeIn, easeInOut, motion as m } from "framer-motion";

function Project() {
  const [filtering, setFiltering] = useState(Projects.filter((e) => e.category === 'website'));

  const filterProjects = (filter) => {
    const updatedProjects = Projects.filter((cur) => cur.category === filter);
    setFiltering(updatedProjects);
  };

  return (
    <m.div
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{duration:3,ease:'easeInOut'}}
    className='app__projects section__padding'>
      <div className="app__projects-header">
        <h1>Projects</h1>
      </div>
      <div className="app__projects-categories">
        <button onClick={() => filterProjects("website")} >Website</button>

        <button onClick={() => filterProjects("application")}>Application</button>
      </div>
      <div className="app__projects-content">
        {filtering.map((proj) => {
          const { id, name, image, link } = proj;
          return (
            <div key={id} className="app__projects-inf">
              <a href={link}>{name}</a>
              <img src={image} alt="" />
              <div className="app__project-overlay"></div>
            </div>
          );
        })}
      </div>
    </m.div>
  );
}

export default Project;
