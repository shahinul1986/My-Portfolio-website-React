import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'
import IMG4 from '../../assets/portfolio-4.png'
import IMG5 from '../../assets/portfolio-5.jpg'
import IMG6 from '../../assets/portfolio-6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crud Operation by PHP',
    github: 'https://github.com',
    demo: 'https://github.com/shahinul1986/crud'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Psd to HTML Convertion',
    github: 'https://github.com',
    demo: 'https://github.com/shahinul1986/psd_to_html'
  },
  {
    id: 3,
    image: IMG3,
    title: 'CUDA single page-portfolio website',
    github: 'https://github.com',
    demo: 'https://github.com/shahinul1986/cuda-single-page-portfolio'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Shahin IT Care Portfolio website',
    github: 'https://github.com',
    demo: 'http://shahinitcare.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Eduford-University Web Site. Psd to HTML',
    github: 'https://github.com',
    demo: 'https://github.com/shahinul1986/Eduford-University-website-psd-to-HTMl'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Laravel project',
    github: 'https://github.com',
    demo: 'https://github.com/shahinul1986/crudan'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfoli__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio