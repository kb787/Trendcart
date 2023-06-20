const Video = ({ src }) => (
    <iframe
      allowFullScreen
      height="300"
      src={src}
      width="350"
    />
  );
  
  export default Video;