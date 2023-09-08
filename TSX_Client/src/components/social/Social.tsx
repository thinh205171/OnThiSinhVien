import { FC } from "react";
import "./social.scss";

const Social: FC = () => {
  return (
    <div>
      <div className="social-div-content">
        <div className="social-content">
          <div className="social-header-content">
            <div className="main-header-social">
              <h2>
                OTSV TRÊN CÁC <span>NỀN TẢNG</span> MẠNG XÃ HỘI
              </h2>
            </div>
            <div className="subtitle-header-social">
              Nơi chia sẻ kiến thức, kỹ năng bổ ích dành cho sinh viên
            </div>
          </div>

          <div className="social-items-content">
            <div className="item-social">
              <div className="social-image">
                <img
                  src="	https://onthisinhvien.com/resources/images/otsv/youtube.png"
                  alt=""
                />
              </div>
              <div className="social-static">
                <img
                  src="https://onthisinhvien.com/resources/images/otsv/eyes.png
                "
                  alt=""
                />
                <span>2.269.530</span>
              </div>
              <a href="https://www.youtube.com/c/%C3%94nthiSinhvi%C3%AAn">
                <div className="socail-button">
                  <div className="social-button-sub">
                    <span>Subcribe</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="item-social">
              <div className="social-image">
                <img
                  src="https://onthisinhvien.com/resources/images/otsv/tiktok.png"
                  alt=""
                />
              </div>
              <div className="social-static">
                <img
                  src="https://onthisinhvien.com/resources/images/otsv/eyes.png
                "
                  alt=""
                />
                <span>10.908</span>
              </div>
              <a href="https://www.tiktok.com/@onthisinhvien">
                <div className="socail-button">
                  <div className="social-button-sub">
                    <span>Follow</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
