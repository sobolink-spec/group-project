import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import PopularCourses from "./components/PopularCourses/PopularCourses";
import CourseProgram from "./components/CourseProgram/CourseProgram";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import Certificate from "./components/Certificate/Certificate";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Categories />
      <PopularCourses />
      <CourseProgram />
      <Team />
      <Testimonials />
      <Certificate />
      <Blog />
      <Contact />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;