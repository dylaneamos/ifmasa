import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate the mailto link with email and message
    const mailtoLink = `mailto:dylaneamos@gmail.com?subject=Contact Inquiry&body=${encodeURIComponent(
      `Email: ${email}%0D%0A%0D%0AMessage: ${message}`
    )}`;
    // Open the default email client with the mailto link
    window.open(mailtoLink, '_blank');
    // Reset the form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-containeer">
      <p>Reach out to us using these given contact details. We would love to hear from you regarding IFMASA.</p><br /><br />
      <div className="contact-infoo">
        <div className="contact-iteem">
          <h2>Address</h2>
          <p>P.O Box 3918, </p>
          <p>5 Shaaban Robert Street</p>
        </div>
        <div className="contact-iteem">
          <h2>Email</h2>
          <p>info@ifmasa.org</p>
        </div>
        <div className="contact-iteem">
          <h2>Phone</h2>
          <p>+255 7777777</p>
        </div>
        <div className="contact-iteem">
          <h2>Fax</h2>
          <p>+255 7777777</p>
        </div>
      </div><br />
      <p>Map will be displayed here</p><br />
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.636345135751!2d39.29096170833137!3d-6.814009766614958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b113fc2db53%3A0x1735d30e3398bba!2sInstitute%20of%20Finance%20Management%20(IFM)!5e0!3m2!1sen!2stz!4v1686547945494!5m2!1sen!2stz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <p className="contact-introo">
        We would love to hear from you! If you have any questions or would like to get in touch,
        please fill out the form below.
      </p>
      <form className="contact-forrm" onSubmit={handleSubmit}>
        <div className="form-groupp">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-groupp">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-buttoon">
          Send
        </button>
      </form><br /><br />
    </div>
  );
}

export default Contact;
