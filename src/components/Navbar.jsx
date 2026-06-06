// Navigation bar.
// Uses React Router links instead of React state.

import { Link } from 'react-router-dom';

function Navbar({
  lovedVideos,
  watchLaterVideos,
}) {
  return (
    <nav className="navbar">
      <h2>FocusTube</h2>

      <div className="nav-links">
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/watch-later">
          <button>
            Watch Later ({watchLaterVideos.length})
          </button>
        </Link>

        <Link to="/loved-videos">
            <button>
                Loved Videos ({lovedVideos.length})
            </button>
        </Link>

        <Link to="/settings">
          <button>Settings</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;