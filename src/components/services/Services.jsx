import React from 'react'
import {IoMdCheckmark} from 'react-icons/io'
import './services.css'
import { useInView } from 'react-intersection-observer';
import styles from '../../animations.css'

const Services = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0
  });

  return (
    <section id='services'  ref={sectionRef} className={`${inView ? styles.fadeIn : ""}`}>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className='service'>
          <div className="service_head">
            <h3>Webdevelopment</h3>
          </div>

          <ul className='service_list'>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <IoMdCheckmark className='service_list_icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services