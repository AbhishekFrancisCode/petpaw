import React from "react";
import ReactDOM from "react-dom";
import "./css/layout.css";

interface YouTubePlayerProps {
  videoId: string; // YouTube video ID (e.g., "dQw4w9WgXcQ")
  width?: string; // Width of the video player
  height?: string; // Height of the video player
  allowFullScreen?: boolean; // Enables fullscreen option
  autoplay?: boolean; // Autoplay video
  controls?: boolean; // Show video player controls
  loop?: boolean; // Loop video
  className?: string; // Additional CSS class for styling
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  allowFullScreen = true,
  autoplay = false,
  controls = true,
  loop = false,
  className = ""
}) => {
  const autoplayParam = autoplay ? 1 : 0;
  const controlsParam = controls ? 1 : 0;
  const loopParam = loop ? 1 : 0;

  const src = `https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}`;

  return (
    <div className="youtube-wrapper">
      <div className="youtube-container">
        <iframe
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={allowFullScreen}
          title="YouTube Video Player"
          style={{
            border: "6px solid #ddd",
            borderRadius: "8px"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
