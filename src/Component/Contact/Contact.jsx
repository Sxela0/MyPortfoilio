import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="container-inner-container">
          <h3>Contact</h3>
          <p>I’m excited to learn about your project. Ready to get started?</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>

            <div className="submit-button">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
