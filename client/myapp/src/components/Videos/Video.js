const Video = ({ src }) => (
    <iframe
      allowFullScreen
      height="302"
      src={src}
      width="352"
      className="videoCard"
    />
  );
  
  export default Video;