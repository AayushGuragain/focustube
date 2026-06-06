// Reusable video card component.
// Receives video information through props.

function VideoCard({
  video,
  lovedVideos,
  setLovedVideos,
}) {
    // Add video to Loved Videos.
    function handleLoveVideo() {
    setLovedVideos([...lovedVideos, video]);
}
  return (
    <div className="video-card">
      {/* Video thumbnail placeholder */}
      <div className="video-thumbnail">
        Thumbnail
      </div>

      {/* Video information */}
      <div className="video-info">
        <h3>{video.title}</h3>

        <p>Channel: {video.channel}</p>

        <p>Duration: {video.duration}</p>

        {/* These buttons do not work yet. We are building the UI first. */}
        <div className="video-actions">
          <button>Watch Later</button>
          <button onClick={handleLoveVideo}>
            Love
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard; 
