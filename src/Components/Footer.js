import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            We are happy to hear from you concerning anything about IFMASA.
        </p>

    </section>
    <div className="footer-links">
      <div className="footer-link-wrapper">
         <div className="footer-link-items">
         <h2 >About US</h2>
           <Link to='/IFMASA-Leadership'>Our Leadership</Link>
           <Link to='/IFMASA-Memberprofile'>IFMASA Members</Link>
           <Link to='/Contact-us'>Work With Us</Link>
           <Link to="/">Home</Link>
         </div>
         <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Contact-us'>Contact</Link>
            <Link to='/products'>Products</Link>
            <Link to='/products'>Services</Link>
            <Link to='/Contact-us'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Important Links</h2>
            <a href='/https://ifm.ac.tz/'>IFM Main link</a>
            <a href='/http://www.ifmsis.ac.tz/staffis/'>Staff IS</a>
            <a href='/http://ifmsis.ac.tz/studentis/'>Student IS</a>
            <a href='/https://www.tanzania.go.tz/'>Government Portal</a>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='/https://www.instagram.com/ifm_tz/'>Instagram</a>
            <a href='/https://www.facebook.com/OfficialIFM/'>Facebook</a>
            <a href='/https://www.youtube.com/channel/UCtSxPi0hjFtM-VcrZYg2kJQ'>Youtube</a>
            <a href='/https://twitter.com/IFM_TANZANIA'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              IFMASA
              <i className="fa-solid fa-building-columns"></i>
            </Link>
          </div>
          <small class='website-rights'>IFMASA © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='/https://www.facebook.com/OfficialIFM/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              class='social-icon-link instagram'
              href='/https://www.instagram.com/ifm_tz/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              class='social-icon-link youtube'
              href='/https://www.youtube.com/channel/UCtSxPi0hjFtM-VcrZYg2kJQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a
              class='social-icon-link twitter'
              href='/https://twitter.com/IFM_TANZANIA'
              target='_blank'
              aria-label='Twitter'
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              class='social-icon-link linkedin'
              href='/https://www.linkedin.com/in/the-institute-of-finance-management-ifm-5b497144/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
