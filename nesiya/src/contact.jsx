import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {
  useEffect(() => {
    if (!sessionStorage.getItem("welcomeShown")) {
      alert("Welcome to our page!");
      sessionStorage.setItem("welcomeShown", "true");
    }
  }, []);

  const form = useRef();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const validateInputs = () => {
    const newErrors = {};
    if (!/^[A-Za-z\s]{3,}$/.test(name.trim())) {
      newErrors.name = "Enter a valid name (letters only, min 3 characters)";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    emailjs.sendForm(
      'service_nyf7imi',
      'template_e48tsk5',
      form.current,
      '2iW7NRyt5XKzFdgEg'
    )
    .then(() => {
      alert("Message sent successfully!");
      setSubmittedData({ name, email, mobile, message });
      clearForm();
    })
    .catch(() => alert("Failed to send message."));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    setSubmittedData({ name, email, mobile, message });
    setIsEditing(false);
    alert("Data updated successfully!");
    clearForm();
  };

  const handleEdit = () => {
    setIsEditing(true);
    setName(submittedData.name);
    setEmail(submittedData.email);
    setMobile(submittedData.mobile);
    setMessage(submittedData.message);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setIsEditing(false);
    setErrors({});
    clearForm();
  };

  const clearForm = () => {
    if (form.current) form.current.reset();
    setName(""); 
    setEmail("");
    setMobile(""); 
    setMessage("");
  };

  return (
    <>
      <h1 className='h1'>Contact Us</h1>
      <div className="contact-container">
        <h2 className='h2'>
          Hello <span className="name">{name || " "}</span>!
        </h2>

        {/* Form always shows unless editing is off and submittedData is present */}
        {(isEditing || !submittedData) && (
          <form 
            ref={form} 
            onSubmit={isEditing ? handleUpdate : sendEmail} 
            className="contact-form"
          >
            <input type="text" name="user_name" placeholder="Your Name..." value={name} onChange={(e) => setName(e.target.value)} required />
            {errors.name && <span className="error">{errors.name}</span>}

            <input type="email" name="user_email" placeholder="Your Email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <span className="error">{errors.email}</span>}

            <input type="tel" name="user_mobile" placeholder="Mobile Number..." value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            {errors.mobile && <span className="error">{errors.mobile}</span>}

            <textarea name="message" placeholder="Your Message..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

            <button type="submit">{isEditing ? "Update" : "Send"}</button>
          </form>
        )}

        {submittedData && !isEditing && (
          <div className="confirmation-box">
            <h3>Welcome, {submittedData.name}!</h3>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Mobile:</strong> {submittedData.mobile}</p>
            <p><strong>Message:</strong></p>
            <blockquote>{submittedData.message}</blockquote>
            <p>✅ Message sent successfully!</p>

            <button onClick={handleEdit} className="edit-btn">Edit</button>
            <button onClick={handleReset} className="reset-btn">Reset</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;









