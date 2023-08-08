import React, { useState } from 'react'
import me from "../assets/me.jpg"
import "./Home.css"
import menu from "../assets/menu.svg"
import location from "../assets/location.svg"
import {FaLocationArrow} from "react-icons/fa"
import {AiOutlineArrowDown,AiFillGithub,AiFillBehanceCircle} from "react-icons/ai"
import {useEffect} from "react"
import {CgDarkMode} from "react-icons/cg"
import {BsFacebook,BsInstagram} from "react-icons/bs"
import { easeOut, motion as m } from 'framer-motion'


function Home({ darkMode, toggleDarkMode }) {

  return (
    <>
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.75,ease:easeOut}}
    className='app__home-container section__padding'>
        <div className="app__home-header">
            <div className="app__home-header__leftsection">
            <img src={me} alt="" srcset="" />
            <div className="app__image-overlay"></div>
            </div>
            <div className="app__home-header__rightsection">
                <a href="https://www.behance.net/lawandata14"> <span> <AiFillBehanceCircle /> </span> </a>
                <a href="https://github.com/lawandbarbarosa"> <span> <AiFillGithub /> </span> </a>
                <a href="https://www.facebook.com/lawan.dta.1/"> <span> <BsFacebook /> </span> </a>
                <a href="https://www.facebook.com/lawan.dta.1/"> <span> <BsInstagram /> </span> </a>
            </div>
        </div>
        <div className="app__homecontent">
            <h1>
            Salam, I am Lawand <br /> Barbarosa
            </h1>
            <div className="app__home-content-location">
            <span> <FaLocationArrow /> </span>
             <h2>Sulaymaniyah-Kurdistan</h2>
            </div>
            <div className="app__home-content-talent">
                <p>I am  Full-Stack Develper& Ui,Ux Designer</p>
            </div>
        </div>
    </m.div>
    </>
  )
}

export default Home