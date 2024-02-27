import React, { useState } from 'react';
import styles from './Contact.module.css';  // Import your custom CSS file

export default function Contact () {
  const [firstname, setFirstname] = useState('');
  const [lastaname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section className={styles.container}> {/* Use styles object to apply CSS Module */}
      <h2 className={styles.heading}>Contact Us</h2>
      <p className={styles.description}>Whether you have questions about using our platform, need assistance with job postings, or simply want to share your feedback, we're here to listen. Your satisfaction is our priority, and we're eager to help you make the most of your job search or recruitment journey.</p>
      <form onSubmit={handleSubmit} className="space-y-8">
      <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter a first name,please"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Lastname">Last Name</label>
          <input
            type="text"
            id="Lastname"
            placeholder="Enter a last name,please"
            required
            value={lastaname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email,please (name@gmail.com)"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Let us know how we can help you"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div> */}
        <div className="sm:col-span-2">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Leave a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles['submit-button']}>Send message</button>
      </form>
    </section>
  );
}

