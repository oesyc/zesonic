"use client";
import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error("Autoplay failed:", error));
    }
  }, []);

  return (
    <video ref={videoRef} src="/vid.webm" className="w-full h-auto" muted loop playsInline />
  );
};

export default VideoPlayer;
