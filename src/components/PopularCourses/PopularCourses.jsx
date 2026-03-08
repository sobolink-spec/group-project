import React from "react";

export default function PopularCourses() {
  const courses = [
    {
      title: "Marketing Basics",
      category: "Marketing",
      lessons: "12 lessons",
      students: "1,240 students",
    },
    {
      title: "Product Management",
      category: "Management",
      lessons: "10 lessons",
      students: "980 students",
    },
    {
      title: "UI/UX Design Essentials",
      category: "Design",
      lessons: "14 lessons",
      students: "1,560 students",
    },
  ];

  return (
    <section className="popular-courses">
      <div className="container">
        <h5>POPULAR COURSES</h5>
        <h2>Most popular courses</h2>

        <div className="popular-courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <span className="course-category">{course.category}</span>
              <h3>{course.title}</h3>
              <p>{course.lessons}</p>
              <p>{course.students}</p>
              <button className="btn-outline">View course</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}