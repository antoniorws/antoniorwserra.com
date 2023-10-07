import React from 'react';
import './About.css';
import aboutImg from '../../assets/images/about.jpg';
import { inject } from '@vercel/analytics';

function About(){
    inject();
    return (  
      <main>
        <div class="about">
            <div class= "content">
              <div class="div-image-about">
                <img src={aboutImg} alt="About Image" />
              </div>
              <div>
                  <p>Very focused professional and very easy to work in a team.</p>
                  <p>I always look for innovation. On my journey I was part of MV Sistemas.</p>
                  <p>Learning the business rules of the Hospital area (mainly the Supplies area).</p>
                  <p>I was also part of the technology area at Accenture focused on financial services, today I am part of China Systems.</p>
              </div>
            </div>
        </div>
      </main>
    )
}

export default About;