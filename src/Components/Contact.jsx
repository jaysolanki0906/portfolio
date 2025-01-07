import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("mlddovwy"); // Replace "mlddovwy" with your actual Formspree form ID.

  if (state.succeeded) {
    return <p>Thanks for reaching out! We'll get back to you soon.</p>;
  }

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Get in Touch</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter a valid email address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <div className="contact-image">
        <img src={require('./images/contactus.png')} alt="Man with Laptop" />
      </div>
    </div>
  );
}

export default Contact;
