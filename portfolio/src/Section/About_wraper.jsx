import React from 'react'
import "../Style/About_wraper.css"

const About_wraper = () => {
  return (
    <section className="about-wrapper">
      <div className='inner-wrapper'>
        <div className="about-content">
          <div className="hero-left">
            <figure>
              <img src="https://themewagon.github.io/picto/assets/person-CqOZwXV1.png" alt="Hero Image" />
            </figure>
            <div className='box-wrapper'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='box1'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='box2'>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='box3'>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <h1>I am Professional User Experience Designer</h1>
            <p>I design and develop services for customers
              specializing creating stylish, modern websites, web services and online stores.
               My passion is to design digital user experiences.

              I design and develop services for customers specializing
              creating stylish, modern websites, web services.</p>
            <button className="primary-btn">My Project</button>
            <button className="primary-btn1">Download Cv</button>
          </div>


        </div>
      </div>
    </section>
  )
}

export default About_wraper
