// Main application component.
// React Router determines which page to display.

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import './App.css';

import Home from './pages/Home';
import WatchLater from './pages/WatchLater';
import LovedVideos from './pages/LovedVideos';
import Settings from './pages/Settings';
import { useState } from 'react';
import {
  initialLovedVideos,
  initialWatchLaterVideos,
} from './data/userData';

function App() {

    // Stores videos the user loves.
  const [lovedVideos, setLovedVideos] =
    useState(initialLovedVideos);

  // Stores videos saved for later.
  const [watchLaterVideos, setWatchLaterVideos] =
    useState(initialWatchLaterVideos);
  return (
    <>
      <Navbar
        lovedVideos={lovedVideos}
        watchLaterVideos={watchLaterVideos}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                lovedVideos={lovedVideos}
                setLovedVideos={setLovedVideos}
                watchLaterVideos={watchLaterVideos}
                setWatchLaterVideos={setWatchLaterVideos}
              />
            }
          />

          <Route
            path="/watch-later"
            element={
              <WatchLater
                watchLaterVideos={watchLaterVideos}
              />
            }
          />

          <Route
            path="/loved-videos"
            element={
              <LovedVideos
                lovedVideos={lovedVideos}
              />
            }
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;