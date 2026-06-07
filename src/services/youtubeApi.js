// Handles communication with the YouTube Data API.

import axios from 'axios';

// Temporary API key.
// We will move this to an environment variable later.
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export async function searchVideos(query) {
  const response = await youtubeApi.get(
    '/search',
    {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        type: 'video',
        key: API_KEY,
      },
    }
  );

  return response.data.items;
}