import React, { useState } from 'react';
import "./skill.css";
import skills from './skill';
import { motion as m } from 'framer-motion';
function Skills() {
  const [activeTab, setActiveTab] = useState("Development");
  const [filtering, setFiltering] = useState(skills.filter((e) => e.category === 'Development'));

  const filteringItems = (filteringCategory) => {
    setActiveTab(filteringCategory);
    const updating = skills.filter((curElm) => curElm.category === filteringCategory);
    setFiltering(updating);
  };

  return (
    <m.div
    whileInView={{x:[-20.0],opacity:[0,1]}}
    transition={{duration:3,ease:'easeInOut'}}
    className='app__skills section__padding'>
      <div className="app__skills-header">
        <h1>Skills</h1>
      </div>
      <div className="app__skills-content">
        <div className="app__skills-content-leftSide">
          <button
            className={activeTab === "Development" ? "active" : ""}
            onClick={() => filteringItems("Development")}
          >
            Development Skill
          </button>
          <button
            className={activeTab === "Design" ? "active" : ""}
            onClick={() => filteringItems("Design")}
          >
            Design Skill
          </button>
        </div>
        <div className="app__skills-content-Rigntside">
          {filtering.map((skill) => {
            const { name, image, category, id } = skill;
            return (
              <div className="app__skills-content-skill" key={id}>
                <img src={image} alt="" />
                <h1>{name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </m.div>
  );
}

export default Skills;
