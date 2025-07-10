type VideoPlayerProps = {
  src: string;
  width?: string;
  height?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  className?: string;
};

export default function VideoPlayer({
  src,
  width = "100%",
  height = "auto",
  autoPlay = false,
  muted = false,
  controls = true,
  poster,
  className = "rounded-lg shadow-lg",
}: VideoPlayerProps) {
  return (
    <video
      width={width}
      height={height}
      autoPlay={autoPlay}
      muted={muted}
      controls={controls}
      poster={poster}
      className={className}
      loop
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
