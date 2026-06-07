// Main navigation bar.
// Version 1 only needs Home and Search.
// We are removing duplicate YouTube features like Watch Later and Loved Videos.

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FocusTube</h2>

      <div className="nav-links">
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/search">
          <button>Search</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;