import React from "react";

interface VideoPlayerProps {
  src: string; // Path to the video file
  type?: string; // MIME type (e.g., 'video/mp4')
  controls?: boolean; // Show or hide video controls
  autoPlay?: boolean; // Autoplay the video
  loop?: boolean; // Loop the video
  muted?: boolean; // Mute the video
  className?: string; // Additional CSS classes
  width?: string | number; // Width of the video
  height?: string | number; // Height of the video
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type = "video/mp4",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = "",
  width = "100%", // Default to full width
  height = "auto", // Default to maintain aspect ratio
}) => {
  return (
    <div
      className={`relative ${className} md:hover:scale-125 md:hover:translate-x-10 lg:hover:translate-x-20 rounded-xl transition-all`}
      style={{ width, height }}
    >
      <video
        src={src}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        style={{ width: "100%", height: "100%" }}
        className="rounded-xl pointer-events-none" 
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
