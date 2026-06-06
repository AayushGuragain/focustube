// Loved Videos page.
// Displays videos the user has loved.

import VideoCard from '../components/VideoCard';

function LovedVideos({ lovedVideos }) {
  return (
    <div>
      <h1>Loved Videos</h1>

      {lovedVideos.length === 0 ? (
        <p>No loved videos yet.</p>
      ) : (
        lovedVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            lovedVideos={lovedVideos}
            setLovedVideos={() => {}}
          />
        ))
      )}
    </div>
  );
}

export default LovedVideos;