import "./VideoTile.scss";

const VideoTile = (props) => {
  return (
    <video className="video-tile" autoPlay loop muted>
      <source src={props.video} type="video/mp4" />
    </video>
  );
};

export default VideoTile;