import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMessage('');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_lnf23xd', 'template_0afyqma', form.current, 'tLIi0nyErDSxSpsVe')
      .then((_result) => {
          setStatusMessage('✅ Message sent successfully!');
          form.current?.reset();
      }, (error) => {
          setStatusMessage('❌ Failed to send message. Please try again.');
          console.error(error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container animate-fade-in">
      <h1 className="page-title gradient-text">Get In Touch</h1>
      
      <div className="contact-wrapper">
        
        {/* Left Side: Contact Information Cards */}
        <div className="contact-info">
          <a href="mailto:akulchauhan2009034@gmail.com" className="contact-link-card">
            <span>Email</span>
            <strong>akulchauhan2009034@gmail.com</strong>
          </a>
          
          <a href="tel:+919540197872" className="contact-link-card">
            <span>Phone</span>
            <strong>+91 9540197872</strong>
          </a>

          <a href="https://www.linkedin.com/in/akul-chauhan-5b5734266/" target="_blank" rel="noreferrer" className="contact-link-card">
            <span>LinkedIn</span>
            <strong>Connect Professionally</strong>
          </a>

          <a href="https://www.instagram.com/iam.akul8/" target="_blank" rel="noreferrer" className="contact-link-card">
            <span>Instagram</span>
            <strong>Follow my journey</strong>
          </a>
        </div>

        {/* Right Side: EmailJS Form */}
        <div className="contact-form-container">
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send me a message</h2>
          
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="user_name" className="form-control" required placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" className="form-control" required placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control" rows={5} required placeholder="Hey Akul, I'd like to talk about..."></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {statusMessage && (
              <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 500, color: statusMessage.includes('✅') ? '#10b981' : '#ef4444' }}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}