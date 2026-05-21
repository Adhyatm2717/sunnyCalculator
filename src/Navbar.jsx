import React from 'react'

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #333;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          margin: 0;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #4CAF50;
        }
      `}</style>
      <nav className="navbar">
        <div className="navbar-logo">BrandName</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;