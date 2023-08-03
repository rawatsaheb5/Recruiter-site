import React from 'react'
import Navbar from './Navbar'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
      <div className='home'>
          <div className='grid'>
          <div className='col'>
              <h1>Recruiting, Evolved</h1>
              <p>Combine the power of collaborative hiring with AI <br/>automation to find, screen, and hire the best candidates.<br/> Coursify works for...</p>
          </div>
          <div className='col'>
              <img className='home-image-1' src='https://cdn.sanity.io/images/v0eku8av/production/ae812ce174315b2b771c1a8738faf0bacbe7738c-2912x1818.png?w=3840&q=75&fit=clip&auto=format' />
         </div>
              
          </div>

          <div className='row-2'>
              <h2>Where techies realise their true potential</h2>
              <p>
              Look beyond the obvious. Use Coursify to easily get discovered by awesome <br/>companies and get referred to job positions very few know about.
              </p>
              <div className='button-group'>
                    <Link to='/recruiter' className='button' >Hire Talent</Link>
                    <Link to='/job' className='button'  >Find Jobs</Link>
              </div>
                  
              
          </div>
          <div className='privacy'>
              <p>Copyright C 2023</p>
              
          </div>
          
    </div>
  )
}

export default Home