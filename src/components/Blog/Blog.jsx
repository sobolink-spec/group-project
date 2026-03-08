import React from 'react';
export default function Blog() {
  return (
    <section className="blog">

      <div className="container">

        <h5>OUR BLOG</h5>
        <h2>Latest posts</h2>

        <div className="blog-grid">

          <div className="post">
            <h4>What is traffic arbitrage</h4>
            <p>Marketing • 36 min</p>
          </div>

          <div className="post">
            <h4>What to do if you want product feedback</h4>
            <p>Management • 45 min</p>
          </div>

          <div className="post">
            <h4>Should you choose a creative profession?</h4>
            <p>Design • 30 min</p>
          </div>

        </div>

      </div>

    </section>
  );
}