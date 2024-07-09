import React, { useRef, useState } from 'react'
// import avatar from '../assets/my-bg-profile.png'
import avatar from '../assets/me-filter-1.png'
import './sidebar.css'

const Sidebar = () => {
  const [toggle, setToggle] = useState(true)
  const contacts = useRef(null)
  function showContact(){
    setToggle(!toggle)
    const showBtn = document.querySelector('.show-btn2')
    if(toggle){
      showBtn.classList.add("show-btn2-bg")
      contacts.current.classList.remove("slideUp")
      contacts.current.classList.add("slideDown")

    }else{
      showBtn.classList.remove("show-btn2-bg")
      contacts.current.classList.remove("slideDown")
      contacts.current.classList.add("slideUp")
        }
  }
  return (
    <div className="sidebar" ref={contacts}>

      <div className="my-info info">
        <button className='show-btn1' onClick={showContact}>Show Contacts</button>
        <button className='show-btn2' onClick={showContact}>
        <ion-icon name="chevron-down"></ion-icon>
        </button>
        <div className='avatar-box'>
          <img src={avatar} className='i' alt="" />
        </div>
        <div className='intro'>
          <h1 className='name'>Roushan Singh</h1>
          <p className='passion'>Web Developer</p>
        </div>
      </div>

      <div className="my-info toggle more-info" >

        <div className="separator"></div>

        <ul className="contacts-list">

          <div className='info-wrapper'>
            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:roushansingh3698@gmail.com" className="info-link">roushansingh3698@gmail.com</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                {/* <ion-icon name="logo-linkedin"></ion-icon> */}
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+919007917120" className="info-link">+91 9007917120</a>
              </div>

            </li>
          </div>

          <div className='info-wrapper'>
            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="2003-11-04" className="info-link">Nov 04, 2003</time>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address className="info-link">Sheoraphuli, Hooghly, WB, India</address>
              </div>

            </li>
          </div>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://www.facebook.com/profile.php?id=100032073308149" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://x.com/Roushan22896940" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/roushansingh3698/" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Sidebar