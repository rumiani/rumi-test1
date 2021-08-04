import React from 'react';
import './ContactForm.css'
const ContactForm = ()=> {
    
    return (
        <form   className="form-class"
            action="https://formspree.io/f/xjvjarkb"
            method="POST"> 
            <h2 id='getInTouch'>Get In Touch</h2>
            <p>Whether you have a question or just want to say hi, I'll try my best to get back to you soon!</p>       
        <div className="form-group">
            {/* <label for="Name" className="label">Your name</label> */}
            <div className="input-group">
                <input type="text" id="Name" name="Name" className="form-control" required placeholder='Enter your name'/>
            </div>
        </div>

        <div className="form-group">
            {/* <label for="Email" className="label">Your email address</label> */}
            <div className="input-group">
                <input type="email" id="Email" name="Email" className="form-control" required placeholder='Enter your email'/>
            </div>
        </div>

        <div className="form-group">
            {/* <label for="Message" className="label">Your message</label> */}
            <div className="input-group">
                <textarea id="Message" name="Message" className="form-control" rows="6" maxLength="3000" required placeholder='Write your message'></textarea>
            </div>
        </div>

        <div className="form-group">
            <button type="submit" id="button" className="btn btn-primary btn-lg btn-block">Send Message</button>
        </div>
    </form>
    );
  }
  export default ContactForm;