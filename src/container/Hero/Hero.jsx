import React from 'react'
import './hero.css'
import { interactive } from '../../assets'
import  mobileInteractive from '../../assets/mobile/image-interactive.jpg'


const Hero = () => {

  return (
    <main>
        <div className='loop__main-container'>
            <div className='loop__main-interative-section'>
              <img src={interactive} alt='interactive' className='interactive'/>
              <img src={mobileInteractive} alt='interactive' className='mobileInteractive'/>

              <div className='loop__main-text'>
                  <h1>THE LEADER IN INTERACTIVE VR</h1>
                  <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects from some of the best compainies around the globe. Our award-winning creations have transformed business throug digital experiences that bind to their brand</p>
              </div>
            </div>

            <div className='loop__creation'>
                <div className='creation-header-section'>
                    <h1>OUR CREATIONS</h1>
                    <button type='button' className='button'>SEE ALL</button>
                </div>

                <div className='creation-main-section'>
                    <div className='deepEarth creation'>
                        <p className='creation-para'>DEEP EARTH</p>
                    </div>

                    <div className='arcade creation'>
                        <p className='creation-para'>NIGHT ARCADE</p>
                    </div>

                    <div className='soccer creation'>
                        <p className='creation-para'>SOCCER TEAM VR</p>
                    </div>

                    <div className='grid creation'>
                        <p className='creation-para'>THE GRID</p>
                    </div>

                    <div className='above creation'>
                        <p className='creation-para'>FROM UP ABOVE VR</p>
                    </div>

                    <div className='borealis creation'>
                        <p className='creation-para'>POCKET BOREALIS</p>
                    </div>

                    <div className='curiosity creation'>
                        <p className='creation-para'>THE CURIOSITY</p>
                    </div>
                    
                    <div className='fisheye creation'>
                        <p className='creation-para'>MAKE IT FISHEYE</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero