import React from "react";

function Video() {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        src="83c745cf.mp4"
      ></video>
    </div>
  );
}

export default Video;
