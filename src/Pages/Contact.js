import React from 'react'
import contactimg from "../assest/Broombackground.jpg";
import "../Styles/Contact.css";
import PhoneIcon from '@mui/icons-material/Phone';


function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactimg})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
          <p></p>
          <PhoneIcon /><p> Mr. Anupam: +91-8791475561</p>
        </form>
        
      </div>
    </div>
  )
}

export default Contact