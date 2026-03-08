import React from 'react';
export default function About() {
  return (
    <section className="about">

      <div className="container about-inner">

        <div className="about-text">

          <h5>ABOUT US</h5>

          <h2>Createx Online School</h2>

          <p>
            Createx Online School is a leader in online studying.
            We have lots of courses and programs from the main market experts.
          </p>

          <div className="about-buttons">
            <button className="btn-outline">Explore events</button>
            <button className="btn-primary">Browse courses</button>
          </div>

        </div>

        <img className="about-image" src="/assets/images/content/illustration-2.png" alt="Illustration" />

      </div>

    </section>
  );
}