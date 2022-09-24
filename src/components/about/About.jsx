import React from 'react'
import './about.css'
import ME from '../../assets/me-about.webp'
import {BiBookBookmark} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'
import {BiMedal} from 'react-icons/bi'
import { useInView } from 'react-intersection-observer';
import styles from '../../animations.css'

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0
  });

  return (
    <section id='about' ref={sectionRef} className={`${inView ? styles.fadeIn : ""}`}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="This is me - Mathias Quist Michaelsen" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BiBookBookmark className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years and counting</small>
            </article>
            
            <article className='about_card'>
              <FaUsers className='about_icon' />
              <h5>Clients</h5>
              <small>I've done freelance work for 3 clients</small>
            </article>
            <article className='about_card'>
              <BiMedal className='about_icon' />
              <h5>CEO & <br />Co-Founder</h5>
              <small>Next Level Media</small>
              <br />
              <a href="https://www.nextlevelmedia.dk/">Website &rarr;</a>
            </article>
          </div>

          <p>With only 3 years of experience & my education as a Multimediedesigner, have I already managed to start my own company & done professional work for 3 clients. Do you have a project in mind? Hit me up! - I'll buy us a cup of coffee!</p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About