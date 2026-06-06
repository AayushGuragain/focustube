// Watch Later page.
// Displays videos saved for future viewing.

import VideoCard from '../components/VideoCard';
import EmptyState from '../components/EmptyState';


function WatchLater({ watchLaterVideos }) {
  return (
    <div>
      <h1>Watch Later</h1>

      {watchLaterVideos.length === 0 ? (
        <EmptyState message="No saved videos yet." />
      ) : (
        watchLaterVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            lovedVideos={[]}
            setLovedVideos={() => {}}
            watchLaterVideos={watchLaterVideos}
            setWatchLaterVideos={() => {}}
          />
        ))
      )}
    </div>
  );
}

export default WatchLater;