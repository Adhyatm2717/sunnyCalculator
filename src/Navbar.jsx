import React from 'react'

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 3rem;
          background-color: transparent;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          position: sticky;
          top: 0;
          z-index: 100;
          font-family: 'Inter', sans-serif;
        }

        .navbar-logo {
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #1c1c1e;
          text-decoration: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
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
          color: #6e6e73;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: color 0.15s ease;
        }

        .nav-links a:hover {
          color: #000000;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 1.5rem;
          }
          .nav-links {
            gap: 1.25rem;
          }
        }
      `}</style>
      <nav className="navbar">
        <div className="navbar-logo">Calculator</div>
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