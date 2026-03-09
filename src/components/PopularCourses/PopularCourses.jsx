import React, { useEffect, useState } from "react";

export default function PopularCourses() {
  const defaultCourses = [
    {
      id: 1,
      title: "Marketing Basics",
      category: "Marketing",
      lessons: "12 lessons",
      students: "1240 students",
    },
    {
      id: 2,
      title: "Product Management",
      category: "Management",
      lessons: "10 lessons",
      students: "980 students",
    },
    {
      id: 3,
      title: "UI/UX Design Essentials",
      category: "Design",
      lessons: "14 lessons",
      students: "1560 students",
    },
  ];

  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem("courses");
    return savedCourses ? JSON.parse(savedCourses) : defaultCourses;
  });

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    lessons: "",
    students: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.category.trim() ||
      !formData.lessons.trim() ||
      !formData.students.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (editingId) {
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === editingId ? { ...course, ...formData } : course
        )
      );
      setEditingId(null);
    } else {
      const newCourse = {
        id: Date.now(),
        ...formData,
      };
      setCourses((prevCourses) => [...prevCourses, newCourse]);
    }

    setFormData({
      title: "",
      category: "",
      lessons: "",
      students: "",
    });
  };

  const handleEdit = (course) => {
    setFormData({
      title: course.title,
      category: course.category,
      lessons: course.lessons,
      students: course.students,
    });
    setEditingId(course.id);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setFormData({
          title: "",
          category: "",
          lessons: "",
          students: "",
        });
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      title: "",
      category: "",
      lessons: "",
      students: "",
    });
  };

  return (
    <section className="popular-courses">
      <div className="container">
        <h5>POPULAR COURSES</h5>
        <h2>Most popular courses</h2>

        <div className="popular-courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <span className="course-category">{course.category}</span>
              <h3>{course.title}</h3>
              <p>{course.lessons}</p>
              <p>{course.students}</p>

              <div className="course-card-buttons">
                <button
                  className="btn-outline"
                  onClick={() => handleEdit(course)}
                  type="button"
                >
                  Edit
                </button>

                <button
                  className="btn-primary"
                  onClick={() => handleDelete(course.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="course-form-wrapper">
          <h3>{editingId ? "Edit course" : "Add new course"}</h3>

          <form className="course-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Course title"
              value={formData.title}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lessons"
              placeholder="Lessons (example: 12 lessons)"
              value={formData.lessons}
              onChange={handleChange}
            />

            <input
              type="text"
              name="students"
              placeholder="Students (example: 1240 students)"
              value={formData.students}
              onChange={handleChange}
            />

            <div className="course-form-buttons">
              <button className="btn-primary" type="submit">
                {editingId ? "Update course" : "Add course"}
              </button>

              {editingId && (
                <button
                  className="btn-outline"
                  type="button"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}