import { FC } from "react";
import "./static.scss";

const Static: FC = () => {
  return (
    <div>
      <div className="static-content container">
        <div className="header-static-content">
          <h1>ÔN THI SINH VIÊN - THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN</h1>
        </div>
        <div className="list-static-content">
          <div className="list-item-static">
            <div className="item-static">
              <div className="icon-item-static">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/nam.svg"
                  alt="SVG"
                />
              </div>
              <div className="number-item-static">
                <span>7+</span>
              </div>
              <div className="text-item-static">
                <span>Năm</span>
              </div>
            </div>
            <div className="item-static">
              <div className="icon-item-static">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/truong.svg"
                  alt="SVG"
                />
              </div>
              <div className="number-item-static">
                <span>15+</span>
              </div>
              <div className="text-item-static">
                <span>Trường</span>
              </div>
            </div>
            <div className="item-static">
              <div className="icon-item-static">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/khoa-luyen.svg"
                  alt="SVG"
                />
              </div>
              <div className="number-item-static">
                <span>350+</span>
              </div>
              <div className="text-item-static">
                <span>Khóa Luyện</span>
              </div>
            </div>
            <div className="item-static">
              <div className="icon-item-static">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/hocvien.svg"
                  alt="SVG"
                />
              </div>
              <div className="number-item-static">
                <span>100k+</span>
              </div>
              <div className="text-item-static">
                <span>Học Viên</span>
              </div>
            </div>
            <div className="item-static">
              <div className="icon-item-static">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/fireStar.svg"
                  alt="SVG"
                />
              </div>
              <div className="number-item-static">
                <span>1.9k+</span>
              </div>
              <div className="text-item-static">
                <span>Phiếu Bầu</span>
              </div>
            </div>
            <div className="item-static">
              <div className="icon-item-static">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/hai-long.svg"
                  alt="SVG"
                />
              </div>
              <div className="number-item-static">
                <span>80%</span>
              </div>
              <div className="text-item-static">
                <span>Hài Lòng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
