import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import CourseProgram from "./components/CourseProgram/CourseProgram";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import Certificate from "./components/Certificate/Certificate";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Categories />
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