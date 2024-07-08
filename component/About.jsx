import React from 'react'
import avatar from '../assets/my-avatar.jpg'
import firstIcon from "../assets/icon-design.svg"
import aws from "../assets/skills/aws.png"
import chakraui from "../assets/skills/chakraui.jpeg"
import cloudinary_icon from "../assets/skills/cloudinary_icon.avif"
import css from "../assets/skills/css.png"
import expressjs from "../assets/skills/expressjs.png"
import github from "../assets/skills/github.jpeg"
import html from "../assets/skills/html.png"
import js from "../assets/skills/js.png"
import materialui from "../assets/skills/materialui.png"
import mongodb from "../assets/skills/mongodb.png"
import netlify from "../assets/skills/netlify.png"
import nodejs from "../assets/skills/node-js.png"
import reactjs from "../assets/skills/reactjs.png"
import redux from "../assets/skills/redux.png"
import tailwind from "../assets/skills/tailwind.png"
import vercel from "../assets/skills/vercel.png"
import { TextPlugin } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(TextPlugin)

import './about.css'

const About = () => {

  useGSAP(()=>{
    gsap.to("#text", {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
    })
 
    gsap.fromTo('.para-animation',{
      opacity: 0,
      y: 20
    },
  {
    opacity: 1,
    y:0,
    delay:1,
    stagger: 0.1
  })
  })
    const backgroundFunc =(element)=>{
        const btn = document.querySelectorAll(".tech-btn");
        const techbox = document.querySelectorAll(".techbox");
        
        if(element === 0){
          btn.forEach((item, index)=>{
            ((index === 1 || index === 2))  ? item.classList.remove('btn-background') : item.classList.add('btn-background');
          })
          techbox.forEach((item, index)=>{
            ((index === 1 || index === 2))  ? item.classList.remove('enable-icon') : item.classList.add('enable-icon'); 
          })
        }
        if(element===1){
          btn.forEach((item,index)=>{
            (index===0 || index === 2)? item.classList.remove('btn-background') : item.classList.add('btn-background');
          })
          techbox.forEach((item, index)=>{
            ((index === 0 || index === 2))  ? item.classList.remove('enable-icon') : item.classList.add('enable-icon'); 
          })
        }
        if(element===2){
          btn.forEach((item,index)=>{
            (index===0 || index === 1)? item.classList.remove('btn-background') : item.classList.add('btn-background');
          })
          techbox.forEach((item, index)=>{
            ((index === 0 || index === 1))  ? item.classList.remove('enable-icon') : item.classList.add('enable-icon'); 
          })
        }
    
      }
  return (
    <>
    <div className="content" >
            <div className="about">
              <header>
                <h1 className='heading' id="text">About Me</h1>
              </header>
              <div className='my-box'>

                <div className='text-box'>
                  <h1 className='hi' id="text">Hey</h1>
                  <h1 className='me' id="text">I am Roushan Singh</h1>
                  <div className='wrapper'>
                    <h1 className='me' id="text">I'm into &nbsp; </h1>
                    <ul className="dynamic-text">
                      <li><span> Frontend Development</span></li>
                      <li><span> Backend Development</span></li>
                    </ul>
                  </div>
                </div>

                <div className='avatar'>
                  <div className='avatar-box'>
                    <img src={avatar} className='my-img' alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='my-lines'>
              <p className='p1 para-animation'>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
            </div>

            <div className="about-box1">
              <h1 id="text">What I'm doing</h1>
              <div className='content1'>
                <div className="icons">
                  <img className='img1' src={firstIcon} alt="" />
                </div>
                <div className="content1-text">
                  <h1 className='texth' id="text">Web Development</h1>
                  <p className='textp para-animation'>High-quality development of sites at the professional level.</p>
                </div>
              </div>
            </div>

            <div className='tech-knowledge'>
              <h1>Tech Stack</h1>
              <div className='Tech-buttons'>
                <button className='tech-btn btn-background' onClick={()=> backgroundFunc(0)}>Frontend</button>
                <button className='tech-btn' onClick={()=> backgroundFunc(1)}>Backend</button>
                <button className='tech-btn' onClick={()=> backgroundFunc(2)}>Others</button>
              </div>
              <div className="techStack-icons">
                <div className="techbox enable-icon">
                  <div className='skill-box'>
                    <img src={reactjs} className='skill-icon' alt="" />
                    <h1 className='skill-h'>ReactJs</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={js} className='skill-icon' alt="" />
                    <h1 className='skill-h'>JavaScript</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={redux} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Redux</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={tailwind} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Tailwind Css</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={materialui} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Material Ui</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={chakraui} className='skill-icon' alt="" />
                    <h1 className='skill-h'>ChakraUi</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={html} className='skill-icon' alt="" />
                    <h1 className='skill-h'>HTML</h1>
                  </div>
                  <div className='skill-box'>
                    <img src={css} className='skill-icon' alt="" />
                    <h1 className='skill-h'>CSS</h1>
                  </div>
              
                </div>
                <div className="techbox ">
                <div className='skill-box'>
                    <img src={nodejs} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Node Js</h1>
                  </div>
                <div className='skill-box'>
                    <img src={expressjs} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Express</h1>
                  </div>
                <div className='skill-box'>
                    <img src={mongodb} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Mongodb</h1>
                  </div>
                <div className='skill-box'>
                    <img src={aws} className='skill-icon' alt="" />
                    <h1 className='skill-h'>AWS</h1>
                  </div>
                </div>

                <div className="techbox ">
                <div className='skill-box'>
                    <img src={cloudinary_icon} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Cloudinary</h1>
                  </div>
                <div className='skill-box'>
                    <img src={github} className='skill-icon' alt="" />
                    <h1 className='skill-h'>GitHub</h1>
                  </div>
                <div className='skill-box'>
                    <img src={vercel} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Vercel</h1>
                  </div>
                <div className='skill-box'>
                    <img src={netlify} className='skill-icon' alt="" />
                    <h1 className='skill-h'>Netlify</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </>
  )
}

export default About