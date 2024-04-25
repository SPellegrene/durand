import React from "react";

const VideoComponent = () => {
  return (
    <div>
      <video width="750" controls>
        <source src="/path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
