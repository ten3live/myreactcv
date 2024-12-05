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
      data-netlify="true" 
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name: <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Your Message: <textarea name="message" required></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
