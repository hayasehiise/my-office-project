"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface CustomVideoPlayerProps {
  src: string;
  width?: number | string;
  height?: number | string;
}

export default function VideoBackground({
  src,
  width,
  height,
}: CustomVideoPlayerProps) {
  return (
    <ReactPlayer
      muted={true}
      playing={true}
      url={src}
      width={width}
      height={height}
      loop={true}
    />
  );
}
