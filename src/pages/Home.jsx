// Homepage of FocusTube.
// Displays the long form video feed.

import { mockVideos } from '../data/mockVideos';
import VideoCard from '../components/VideoCard';

function Home({

  lovedVideos,

  setLovedVideos,

}) {
  return (
    <div>
      <h1>Home</h1>

      <h2>Long Form Feed</h2>

      {/* Render one VideoCard for each video */}
      {mockVideos.map((video) => (
        <VideoCard
            key={video.id}
            video={video}
            lovedVideos={lovedVideos}
            setLovedVideos={setLovedVideos}
        />
      ))}
    </div>
  );
}

export default Home;