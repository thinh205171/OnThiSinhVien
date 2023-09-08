import { FC } from "react";
import "./video.scss";

const Video: FC = () => {
  return (
    <div className="container">
      <div className="video-wrapper">
        <iframe
          height="450"
          width="80%"
          src="https://www.youtube.com/embed/L1kI-MVZtEY"
          title="YouTube video player"
          allowFullScreen
          className="video"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
