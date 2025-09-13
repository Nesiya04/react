import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {
  const form = useRef();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // for showing message after send

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nyf7imi',
      'template_e48tsk5',
      form.current,
      '2iW7NRyt5XKzFdgEg'
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");

      setSubmittedData({
        name: name,
        email: email,
        message: message,
        mobile: mobile
      });

      form.current.reset(); // reset form
      setName(""); 
      setEmail("");
      setMessage("");
      setMobile("");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message.");
    });
  };

  const handleReset = () => {
    setSubmittedData(null); // hide message box
  };

  return (
    <>
      <h1 className='h1'>Contact Us</h1>
      <div className="contact-container">
        <h2 className='h2'>
          Hello <span className="name">{name || " "}</span>!
        </h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name}
          />
          <input
            type="tel"
            name="user_mobile"
            placeholder="Mobile Number"
            required
            onChange={(e) => setMobile(e.target.value)} 
            value={mobile}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button type="submit">Send</button>
        </form>

        
        {submittedData && (
          <div className="confirmation-box">
            <h3>Welcome, {submittedData.name}!</h3>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Mobile Number:</strong>{submittedData.mobile}</p>
            <p><strong>Message:</strong></p>
            <blockquote>{submittedData.message}</blockquote>
            <p>✅ Message sent successfully!</p>

            <button onClick={handleReset} className='reset-btn'>Reset</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;




.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 10%;
    background:palevioletred;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
}
.navbar{
    position: relative;
    z-index: 20;
    
}

.logo{
    font-size: 32px;
    color: white;
    font-weight: 600;
}

.navbar a{
    position: relative;
    font-size: 25px;
    color: white;
    font-weight: 800;
    margin-left: 40px;
    

}

.navbar a::before{
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    top: 100%;
    background: white;
}

.nav-icon{
    color: rgb(4, 252, 239);
    font-size: 35px;
    margin-top: 10px;
    
}
.nav-icon1{
    color: rgb(4, 252, 239);
    font-size: 35px;
    margin-top: 10px;
    padding-left:0;
    
}

