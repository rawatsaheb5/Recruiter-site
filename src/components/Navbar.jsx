import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {
    const [auth, setAuth] = useState("null");
    const handleLogout = () => {
        setAuth(null);
      };
    const [menu, setMenu] = useState(false);
    const toggle = () => {
        setMenu(!menu);
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1><Link to='/' style={{ textDecoration: 'none' ,color: 'white'}}>Coursify</Link></h1>
            </div>
            <div className='nav-list '>
                <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
            </div>
            <div className='nav-list'>
                <Link to='/recruiter' style={{ textDecoration: 'none' }}>Recruiter</Link>
            </div>
            <div className='nav-list'>
                <Link to='/job' style={{ textDecoration: 'none' }}>Job Seeker</Link>
            </div>
            {
                auth ?  (<>
                    <div className='nav-list'>
                <Link to='/sign-in' onClick={handleLogout} style={{
                    textDecoration: 'none' }}>Logout</Link>
            </div>
                </>) :
                (<>
                    <div className='nav-list'>
                <Link to='/sign-in' style={{ textDecoration: 'none' }}>Sign in</Link>
            </div>
            <div className='nav-list'>
                <Link to='/sign-up' style={{
                    textDecoration: 'none' }}>Sign up</Link>
            </div>
                </>)
            }
            {/* responsive hamburg
            <div className='hamburg'>
            {
                menu ? (<>
                    <RxCross2 onClick={toggle} />
                    <div className='list'>
                        <ul>
                                <Link className='Link' to='/about'>About</Link>
                                <Link className='Link' to='/job'>Job</Link>
                                <Link className='Link' to='/recruiter'>Recruiter</Link>
                                {
                                    auth ? (<>
                                        <Link className='Link' to='/sign-in'>Logout</Link>
                                    </>) : (<>
                                        <Link className='Link' to='/sign-in'>Sign-in</Link>
                                <Link className='Link' to='/sign-up'>Sign-up</Link>
                                    </>)
                                }
                                
                        </ul>
                    </div>
                </>) : (<>
                        <RxHamburgerMenu onClick={toggle}/>
                </>)
            }
            </div> */}
           
            
            
           
           
            
            
          
    </div>
  )
}

export default Navbar