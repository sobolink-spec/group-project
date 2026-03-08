import React from 'react';
export default function ContactForm() {
  return (
    <section className="contact-form">

      <div className="container form-inner">

        <h5>ANY QUESTIONS?</h5>
        <h2>Drop us a line</h2>

        <form>

          <input placeholder="First Name" />
          <input placeholder="Last Name" />

          <input placeholder="Email" />
          <input placeholder="Phone" />

          <textarea placeholder="Message"></textarea>

          <button className="btn-primary">
            Send message
          </button>

        </form>

      </div>

    </section>
  );
}