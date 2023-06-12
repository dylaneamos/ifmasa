import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import imgLogo from '../images/imglogo.png';

function HeroSection() {
  return (
    <div className="hero-container">
      {/*<video src="/videos/video-1.mp4" autoPlay loop muted />*/}
      <h1>The Institute Of Finance Management Academic Staff Assembly</h1>
      <img src={imgLogo} alt="Hero Image" className="hero-image" />
      <p>STANDING FOR ACADEMIC RIGHTS & FREEDOM</p>
      <div className="hero-btns">
        <Link to="about-us" smooth={true} duration={500} offset={-140}>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            About US
          </Button>
        </Link>
        <Link to="news-letters" smooth={true} duration={500} offset={-140}>
          <Button buttonStyle="btn--primary" buttonSize="btn--large">
            News Letters <i className="fa-solid fa-newspaper"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
