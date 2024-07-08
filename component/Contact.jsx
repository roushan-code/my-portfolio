import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import './contact.css'



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const service = import.meta.env.VITE_SERVICE_ID
  const template = import.meta.env.VITE_TEMPLATE_ID
  const user = import.meta.env.VITE_USER_ID

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      service,
      template,
      templateParams,
      user
    )
      .then((response) => {
        // console.log('Email sent successfully!', response);
        // Reset the input field
        setName('');
        setEmail('');
        setMessage('');
        if(response.status === 200){
          toast.success('Your message is sent successfully!')
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        if(error.status === 400){
          toast.error("There was an error sending your message.")
        }
      });
  };

  return (
    <>
      <div className='content'>
        <div className="about">
          <header>
            <h1 className="heading">Contact</h1>
          </header>
          <section className="mapbox" data-mapbox>
            <figure>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d560362.8140772656!2d88.27438099786522!3d22.67967509376151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1720159218838!5m2!1sen!2sbd" width="400" height="300" loading="lazy" ></iframe>
            </figure>
          </section>
          <section className="contact-form">

            <h1 className="form-title">Contact Form</h1>

            <form  className="form" onSubmit={handleSubmit} >

              <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Full name" required />

                  <input type="email" name="email" className="form-input" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Email address"  required />
              </div>

                  <textarea name="message" className="form-input message-input" value={message}
                    onChange={(e) => setMessage(e.target.value)}  placeholder="Your Message" required ></textarea>

                  <button className="form-btn" type="submit" >
                    <ion-icon name="paper-plane"></ion-icon>
                    {/* <input type="submit" onSubmit={handleSubmit} className='form-submit' placeholder='Send Message' /> */}
                    <span>Send Message</span>
                  </button>

                </form>

              </section>
            </div>
        </div>
      </>
      )
}

      export default Contact