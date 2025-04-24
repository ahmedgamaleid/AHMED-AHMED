import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons

function Contactus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // التحقق من صحة البيانات
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    emailjs.sendForm(
      'service_9lwhtca',
      'template_wjnpj5h',
      form.current,
      'FGT8C6D1hkhzCqFDw'
    )
    .then(() => {
      alert('✅ Your message has been sent successfully! We will get back to you as soon as possible.');
      e.target.reset();  // مسح البيانات من الفورم بعد الإرسال
    })
    .catch((error) => {
      console.error('Sending failed:', error);
      alert('❌ There was an error sending the message. Please try again.');
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundColor: 'black' }}>
        <div className="hero-content text-center" style={{ color: 'white', paddingTop: '150px', textAlign: 'center' }}>
          <h1 className='contactt'>Welcome to My Portfolio</h1>
          <p>Let’s build something amazing together.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section container py-5">
  <div className="row align-items-stretch g-4"> {/* Set the row to stretch */}
    {/* Left Section: Contact Info + Map */}
    <div className="col-md-6  contact-info">
      <h2 className='contactt'  style={{ fontWeight: 'bold', fontSize: '2rem' }}>Contact Information</h2>
      <p>If you’re interested in working together or have any questions, feel free to reach out!</p>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li><strong>Name:</strong> Ahmed Gamal Abdel-Khalek</li>
        <li><strong>Email:</strong> eiid.ahmed4444@gmail.com</li>
        <li><strong>Phone:</strong> +39 393 553 1809</li>
        <li><strong>Location:</strong> Italy, Milan</li>
        <li>
          <div className="social-links text-start my-1">
            <a href="https://github.com/ahmedgamaleid" target="_blank" rel="noopener noreferrer" style={{ fontSize: '30px', color: '#333' }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-eid-300351240/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '30px', color: '#0e76a8', margin: '0 15px' }}>
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/ahmedeidds/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '30px', color: '#C13584', margin: '0 15px' }}>
              <FaInstagram />
            </a>
          </div>
        </li>
      </ul>

      {/* Google Map */}
      <div className="map-container" style={{ width: '100%', maxWidth: '700px', margin: 'auto', boxShadow: '0 4px 10px rgba(162, 235, 164, 0.3)' }}>
        <iframe
          title="My Location in Milan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.93842916641!2d9.225677575810359!3d45.450896834326876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c5d48e44da6d%3A0xd7f46165158f508d!2sVia%20Paolo%20Maspero%2C%2051%2C%2020137%20Milano%20MI!5e0!3m2!1sen!2sit!4v1744458939255!5m2!1sen!2sit"
          width="100%"
          height="230"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    {/* Right Section: Contact Form */}
    <div className="col-md-6 ">
      <h2 className='contactt' style={{ fontWeight: 'bold', marginBottom: '3rem', fontSize: '2rem' }}>Let's Start the Conversation</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            border: 'none',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '1rem',
            width: '100%',
            boxShadow: '0 4px 10px rgba(162, 235, 164, 0.3)',
          }}
        />
        <input
          className='my-3'
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            border: 'none',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '2rem',
            width: '100%',
            boxShadow: '0 4px 10px rgba(162, 235, 164, 0.3)',
          }}
        />
        <textarea
          name="message"
          placeholder="Write your message here..."
          required
          style={{
            border: 'none',
            borderRadius: '12px',
            padding: '12px 16px',
            height: '150px',
            marginBottom: '2rem',
            width: '100%',
            boxShadow: '0 4px 10px rgba(162, 235, 164, 0.3)',
            resize: 'none',
          }}
        ></textarea>
        <div className="d-flex justify-content-center align-content-center button-group">
          <button
            type="submit"
            className="submit-btn px-5 py-2 fs-4 my-2"
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: '2px solid transparent',
              borderRadius: '50px',
              padding: '10px 24px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = '#4CAF50';
              e.target.style.color = '#4CAF50';
              e.target.style.backgroundColor = '#fff';
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.color = '#fff';
              e.target.style.backgroundColor = '#4CAF50';
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

     

    </div>
  );
}

export default Contactus;
