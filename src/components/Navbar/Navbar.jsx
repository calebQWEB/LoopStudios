import { React, useState } from 'react'
import './navbar.css'
import { logo } from '../../assets'
import { close } from '../../assets'
import { hamburger } from '../../assets'

const NavLinks = () => (
                        <ul>
                          <li><a href='#'>About</a></li>
                          <li><a href='#'>Careers</a></li>
                          <li><a href='#'>Events</a></li>
                          <li><a href='#'>Products</a></li>
                          <li><a href='#'>Support</a></li>
                        </ul>
)

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false)

  const toggleMenu = () => {
    setNavMenu(prevState => !prevState)
    console.log(navMenu)
  }

  return (
    <nav className=''>
         <div className='nav-logo'>
            <img src={logo} alt='Logo' className='logo' />
         </div>

          <div className='loop__nav-container'>
            <NavLinks />
          </div>

          
          {navMenu ? 
            <img src={close} 
                alt='close'
                className='close'
                onClick={toggleMenu}/> :

            <img src={hamburger} 
                alt='hamburger' 
                className='hamburger' 
                onClick={toggleMenu}/>}

            {navMenu && (
              <div className='loop__mobileMenu bounce-in-top'>
                  <NavLinks />
              </div>)}
    </nav>
  )
}

export default Navbar