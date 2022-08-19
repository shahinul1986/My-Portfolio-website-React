import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interface Architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sketching and wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dynamic Prototype.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Editing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design References.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic Interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Animation Prototype.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ui Guidelines and Kit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Review.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-Stack Web Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ecommerce-Applicarions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Web Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Management System(CMS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>QA and Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Support and Maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Upgrade your Presence Today</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services