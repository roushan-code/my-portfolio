import React from 'react'
import './resume.css';
import { TextPlugin } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(TextPlugin)

const Resume = () => {
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
        stagger: 0.2
      })
      })
    return (
        <>
            <div className="content" >
                <div className="about">
                    <header>
                        <h1 className='heading'>Resume</h1>
                    </header>
                </div>
                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h1 className="h3">Education</h1>
                    </div>

                    <div className='line'>
                        <div className='real-line'></div>
                        <ol className="timeline-list">

                            <li className="timeline-item">

                                <h4 className="h4 timeline-item-title">The University of Burdwan</h4>

                                <span>2023 — 2026</span>

                                <p className="timeline-text para-animation">
                                    BCA-Bechlor of Computer Application from Chandannagar Institute Of Management & Technology, Chinsurah, Hooghly, WB (*appearing)
                                </p>

                            </li>

                            <li className="timeline-item">

                                <h4 className="h4 timeline-item-title">High School</h4>

                                <span>2019 — 2021</span>

                                <p className="timeline-text para-animation">
                                    Sheoraphuli Vivekananda High School, Sheoraphuli, Hooghly(WB)
                                </p>

                            </li>

                            <li className="timeline-item">

                                <h4 className="h4 timeline-item-title">School</h4>

                                <span>2002 — 2004</span>

                                <p className="timeline-text para-animation">
                                    Rishra Vidyapith (Unit-II) High School, Rishra, Hooghly, WB
                                </p>
                            </li>
                        </ol>
                    </div>
                    <button className='resume-btn' >Resume</button>
                    <h1 >My Skills</h1>

                    <div className='skills'>
                        <li className='skill-item'>JavaScript</li>
                        <li className='skill-item'>ReactJs</li>
                        <li className='skill-item'>HTML/CSS</li>
                        <li className='skill-item'>Material Ui</li>
                        <li className='skill-item'>TailwindCss</li>
                        <li className='skill-item'>Node Js</li>
                        <li className='skill-item'>Express.Js</li>
                        <li className='skill-item'>Mongodb</li>
                        <li className='skill-item'>Redux</li>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Resume