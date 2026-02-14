import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Videos.css';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = 'AIzaSyBo9JHnqWnaasq1u92EAiLNt6fI4Qxuwxo';
        const channelId = 'UCnk8llX2z_XhW_9UeSD7liw';
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            key: apiKey,
            channelId: channelId,
            part: 'snippet',
            maxResults: 25,
            order: 'date'
          }
        });

        const allVideos = response.data.items.filter(item => item.id.kind === 'youtube#video');

        setVideos(allVideos);
      } catch (err) {
        console.error('Failed to fetch videos:', err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="videos-container">
      <div className="channel-header">
        <h1>MorganicYT</h1>
        <a
          href="https://www.youtube.com/@MorganicYT"
          target="_blank"
          rel="noopener noreferrer"
          className="subscribe-button"
        >
          Subscribe
        </a>
      </div>

      <h2>Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id.videoId} className="video-card">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
              <p>{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
