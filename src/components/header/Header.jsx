import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.webp'
import HeaderSocials from './HeaderSocials'
import { useInView } from 'react-intersection-observer';
import styles from '../../animations.css'

const Header = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0
  });

  return (
    <header>
      <div id='header' className="container header_container">
          <h5>Hello I am</h5>
          <h1>Mathias Quist Michaelsen</h1>
          <h5 className='text-light'>Front-End Developer</h5>
          <HeaderSocials />
          <Cta />
          <div className="me">
            <img src={ME} ref={sectionRef} className={`${inView ? styles.fadeIn : ""}`} alt="" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header