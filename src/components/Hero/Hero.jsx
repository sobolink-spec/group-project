import React from 'react';
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-text">

            <div className="play">
              ▶ Play showreel
            </div>

            <h1>
              Enjoy studying
              <br />
              with Createx
              <br />
              Online Courses
            </h1>

            <div className="hero-buttons">
              <button className="btn-outline">About us</button>
              <button className="btn-primary">Explore courses</button>
            </div>
          </div>
        </div>

        <img className="hero-image" src="/assets/images/content/illustration-1.png" alt="Illustration" />

      </div>

    </section>
  );
}