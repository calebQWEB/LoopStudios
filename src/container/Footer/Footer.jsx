import React from 'react'
import './footer.css'
import { logo } from '../../assets'
import {facebook, twitter, pinterest, instagram} from '../../assets'

const Footer = () => {
  return (
<footer>
    <div className='loop__desktop-view'>
        <div className='loop__footer-main'>
            <img src={logo} alt='logo' className='logo' />

            <div className='loop__footer-media'>
                <img src={facebook} alt='facebook' className='facebook' />
                <img src={twitter} alt='twitter' className='twitter' />
                <img src={pinterest} alt='pinterest' className='pinterest' />
                <img src={instagram} alt='instagram' className='instagram' />
            </div>
        </div>

        <div className='loop__footer-links'>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Support</a></li>
            </ul>

            <div className='loop__copyright'>
                &copy; 2021 Loopstudios. All rights reserved.
            </div>
        </div>
    </div>

    // mobile view
    <div className='loop__mobile-view'>
        <div className='loop__mobile-main grid-item'>
            <img src={logo} alt='logo' className='logo' />
        </div>

        <div className='loop__mobile-media grid-item'>
            <img src={facebook} alt='facebook' className='facebook' />
            <img src={twitter} alt='twitter' className='twitter' />
            <img src={pinterest} alt='pinterest' className='pinterest' />
            <img src={instagram} alt='instagram' className='instagram' />
        </div>

        <div className='loop__mobile-links grid-item'>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Support</a></li>
            </ul>
        </div>

        <div className='loop__mobile-copyright grid-item'>
            &copy; 2021 Loopstudios. All rights reserved.
        </div>
    </div>
</footer>
  )
}

export default Footer