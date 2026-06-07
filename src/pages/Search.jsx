// Search page for FocusTube.
//Later this will call the YouTube API.

import { useState } from "react";
import { searchVideos } from '../services/youtubeApi';

function Search() {
    //Store what the user typed.
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    async function handleSearch() {
        const videos =
            await searchVideos(searchText);

        setResults(videos);
    }
    return (
        <div>
            <h1>Search</h1>

            <p>
                Search for long form YouTube videos.
            </p>
            <input
            type = "text"
            placeholder="Search Youtube..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>
            <div>
                {results.map((video) => (
                    <p key={video.id.videoId}>
                        {video.snippet.title}
                    </p>
                ))}
            </div>
        </div>
    );
}
export default Search;