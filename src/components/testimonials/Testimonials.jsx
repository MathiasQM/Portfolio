import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/synkron-logo.png'
import Avatar2 from '../../assets/Mathilde.png'
import Avatar3 from '../../assets/Mux-tabicon.webp'
import { useInView } from 'react-intersection-observer';
import styles from '../../animations.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar1,
    name: 'Synkron Media',
    review: 'Vi arbejdede sammen med Mathias, da vi havde brug for et nyt portfolio til vores virksomhed. Mathias gjorde et professionelt stykkearbejde - Vi kunne ikke anbefale ham mere!'
  },
  {
    avatar: Avatar2,
    name: 'Mathilde Kjær',
    review: 'Mathias er bare verdens BEDSTE kæreste!'
  },
  {
    avatar: Avatar3,
    name: 'MUX',
    review: 'Mathias hjalp os med at udvikle en hjemmeside som led i hans eksamen. Mathias afleverede et godt stykke arbejde, som vi forhåbentlig snart kan offentliggøre!'
  },
]

const Testimonials = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0
  });
  
  return (
    <section id='testimonials'  ref={sectionRef} className={`${inView ? styles.fadeIn : ""}`}>
      <h5>Review from past clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"      
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
       > {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="clients_avatar">
                  <img src={avatar} alt={name} />
                </div>
                  <h5 className="client_name">{name}</h5>
                  <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials