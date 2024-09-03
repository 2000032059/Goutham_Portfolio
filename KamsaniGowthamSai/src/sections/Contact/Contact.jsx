import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  // Use a ref to reference the form element
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Use EmailJS to send the form data
    emailjs.sendForm('service_fye3o0i', 'template_tso3eto', form.current, 's0OWo5-nBbXohI908')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          // You can add a success message or reset the form here
          e.target.reset();  // Reset form after submission
      }, (error) => {
          console.error('There was an error sending your message.', error.text);
          // Handle error here, e.g., display a message to the user
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"  // Changed to email type for better validation
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
