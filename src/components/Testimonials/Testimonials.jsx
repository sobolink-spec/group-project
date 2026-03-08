import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      text: "The courses are very clear and practical. I improved my skills in just a few weeks.",
      name: "Eleanor Pena",
      role: "Marketing Student",
    },
    {
      text: "I really liked the structure of the lessons and the support from the tutors.",
      name: "Jacob Jones",
      role: "Management Student",
    },
    {
      text: "This platform helped me build confidence and start learning design professionally.",
      name: "Savannah Nguyen",
      role: "Design Student",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h5>TESTIMONIALS</h5>
        <h2>What our students say</h2>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <p>{review.text}</p>

              <div className="author">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}