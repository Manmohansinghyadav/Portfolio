import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // Success or error status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Clear the form before sending the request
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Send form data to Formspree using the POST method
    const response = await fetch('https://formspree.io/f/meoealge', { // Replace with your Formspree endpoint
      method: 'POST',
      body: new FormData(form)
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
    } else {
      setStatus('There was an error sending your message.');
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">Contact</h2>
        <form 
          onSubmit={handleSubmit} 
          action="https://formspree.io/f/meoealge" 
          method="POST" 
          className="max-w-xl mx-auto space-y-6"
        >
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
            placeholder="Your Name" 
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
            required
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            placeholder="Your Email" 
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
            required
          />
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange} 
            placeholder="Write Message Here..." 
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg" 
            required
          />
          <button type="submit" className="w-full px-6 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600">
            Send
          </button>
        </form>

        {/* Display submission status */}
        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
