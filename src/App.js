import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setStatus("Form submitted successfully!"))
      .catch((error) => setStatus("Failed to submit form!"));
  };

  return (
    <form 
  name="contact" 
  method="POST" 
  className="space-y-4 p-6 bg-gray-100 rounded-lg"
  netlify
>
  <input type="hidden" name="form-name" value="contact" />
  <div>
    <label className="block text-gray-700">Your Name:</label>
    <input 
      type="text" 
      name="name" 
      className="w-full p-2 border rounded-lg"
      required 
    />
  </div>
  <div>
    <label className="block text-gray-700">Your Email:</label>
    <input 
      type="email" 
      name="email" 
      className="w-full p-2 border rounded-lg"
      required 
    />
  </div>
  <div>
    <label className="block text-gray-700">Your Message:</label>
    <textarea 
      name="message" 
      className="w-full p-2 border rounded-lg" 
      required 
    ></textarea>
  </div>
  <button 
    onClick={handleSubmit}
    type="submit" 
    className="w-full bg-blue-500 text-white p-2 rounded-lg"
  >
    Send
  </button>
</form>
  );
};

export default ContactForm;
