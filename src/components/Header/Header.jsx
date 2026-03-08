import React from 'react';
export default function Header() {
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
          <button className="btn-primary">Get consultation</button>
          <a href="#">Log in / Register</a>
        </div>

      </div>
    </header>
  );
}