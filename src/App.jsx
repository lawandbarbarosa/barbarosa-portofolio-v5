import { useState,useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import shishakan from "./assets/shishakan.png"
import Skills from './components/skill/Skills'
import Project from './components/projects/Project'
import { easeInOut, motion, useScroll, useSpring } from "framer-motion";

function App() {

  const [darkMode,setDarkMode]=useState(true)

  const setHandleMode = ()=>{
      setDarkMode((prevmode)=> !prevmode )
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


 // useEffect(() => {
  //  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //  setDarkMode(prefersDarkMode);
 // }, []);


  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.15,ease:"easeOut"}}
    className={`container  ${darkMode ? 'dark' :'light' }`}>
      <motion.div className="progress-bar" style={{ scaleX }} />
 <Home darkMode={darkMode} toggleDarkMode={setHandleMode} />
 <About />
 <Skills />
 <Project />
    </motion.div>
  )
}

export default App
