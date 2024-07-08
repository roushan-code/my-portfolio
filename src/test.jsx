import React from 'react'
import './App.css'
import Content from "../component/Content"
import Resume from "../component/Resume"
import Portfolio from "../component/Portfolio"
import Contact from "../component/Contact"
import Sidebar from '../component/Sidebar'

function App() {
 

  return (
    <>
      <main className='main-box'>
        <Sidebar/>
        <div className="container">
          <div className='nav'>
            <nav className="navbar">

              <ul className="navbar-list">

                <li className="navbar-item"  >
                  <a className="navbar-link  active" >About</a>
                </li>

                <li className="navbar-item">
                  <a className="navbar-link" >Resume</a>
                </li>

                <li className="navbar-item">
                  <a className="navbar-link" >Portfolio</a>
                </li>

                <li className="navbar-item">
                  <a className="navbar-link" >Contact</a>
                </li>

              </ul>

            </nav>
          </div>
          <Content/>
          <Resume/>
          <Portfolio/>
          <Content/>


        </div>
      </main>
    </>
)}

export default App
