import "./DownloadTile.scss";
import boxshot from "../../assets/Images/boxshot.png";
import downloadIcon from "../../assets/Videos/download-icon.gif";

const DownloadTile = () => {
  return (
    <div className="download-tile">
      <img className="download-tile__boxImage" src={boxshot} alt="thumbnail tile" />
      <h3>Downloading...</h3>
      <img className="download-tile__boxGif" src={downloadIcon} alt="download gif tile" />
    </div>
  )
}

export default DownloadTile;