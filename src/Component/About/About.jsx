import Image from 'next/image';
import React from 'react';
import './About.css';
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <Image
          src={'/static/homebackground.svg'}
          alt="home-background"
          width={100}
          height={100}
        />
        <div className="about-inner-container">
          <div className="about-content-container">
            <h3>About ME</h3>
            <p>
              Hi im james a full stack web developer i work with agencies across
              the globe to create high preformence and ineractive websites that
              work on all platforms!
            </p>
            <p>
              Although i prefer backend I am comfortable with making full
              websites alone the main languages i use are
              Html,css,c#,react,javascript.
            </p>
            <p>
              I have had a pation for coding since I have been young I started
              coding at the age of 13 mainly focusing on cyber security.
            </p>
            <p>
              in order to make sure my skills are all in check I contiue to code
              small projects on the side i am also expanding my knowledge on
              software enginer right now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
