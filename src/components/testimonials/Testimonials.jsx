import React from 'react'
import './testimonials.css'
import AVRT1 from '../../assets/avatar1.png'
import AVRT2 from '../../assets/avatar2.png'
import AVRT3 from '../../assets/avatar3.png'
import AVRT4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVRT1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae, dignissimos asperiores quaerat, inventore recusandae a quasi natus officia tempora blanditiis dolorum molestias, quos ullam nesciunt aliquam animi sunt libero!'
  },
  {
    avatar: AVRT2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae, dignissimos asperiores quaerat, inventore recusandae a quasi natus officia tempora blanditiis dolorum molestias, quos ullam nesciunt aliquam animi sunt libero!'
  },
  {
    avatar: AVRT3,
    name: 'KwameDespite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae, dignissimos asperiores quaerat, inventore recusandae a quasi natus officia tempora blanditiis dolorum molestias, quos ullam nesciunt aliquam animi sunt libero!'
  },
  {
    avatar: AVRT4,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae, dignissimos asperiores quaerat, inventore recusandae a quasi natus officia tempora blanditiis dolorum molestias, quos ullam nesciunt aliquam animi sunt libero!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
     
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials