// Homepage of FocusTube.
// Displays the long form video feed.

import { mockVideos } from '../data/mockVideos';
import VideoCard from '../components/VideoCard';
import { useState } from 'react';


function Home({
  lovedVideos,
  setLovedVideos,
  watchLaterVideos,
  setWatchLaterVideos,
}) {
    // Minimum duration required for a video
    // to appear in the feed.
    const [minimumMinutes, setMinimumMinutes] = useState(60);
    const [minimumSeconds, setMinimumSeconds] = useState(0);
  return (
    <div>
      <h1>Home</h1>

      <h2>Long Form Feed</h2>
      <div className="duration-filter">
        <label>
          Minimum Video Length
        </label>
        <div className="duration-inputs">

        <input
          type="number"
          min = "0"
          value={minimumMinutes}
          onChange={(event) =>
            setMinimumMinutes(
              Number(event.target.value)
            )
          }
        />
        <span>min</span>
        <input
          type="number"
          min = "0"
          max = "59"
          value={minimumSeconds}
          onChange={(event) =>
            setMinimumSeconds(
              Number(event.target.value)
            )
          }
        />
        <span>sec</span>
        </div>
      </div>

      {/* Render one VideoCard for each video */}
      {mockVideos
        .filter(
          (video) => video.durationSeconds >= minimumMinutes * 60 + minimumSeconds
        )
        .map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          lovedVideos={lovedVideos}
          setLovedVideos={setLovedVideos}
          watchLaterVideos={watchLaterVideos}
          setWatchLaterVideos={setWatchLaterVideos}
        />
      ))}
    </div>
  );
}

export default Home;