import React from "react";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          CREATE<span>X</span>
        </div>

        <nav className="nav">
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Events</a>
          <a href="#">Blog</a>
          <a href="#">Contacts</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
          <button className="btn-primary">Get consultation</button>
          <a href="#">Log in / Register</a>
        </div>
      </div>
    </header>
  );
}