import { FC } from "react";
import "./activity.scss";

const Activity: FC = () => {
  return (
    <div>
      <div className="avtivity-content container">
        <div className="header-content">
          <div className="main-header-content">
            <h2 style={{ marginBottom: "0" }}>HOẠT ĐỘNG TIÊU BIỂU</h2>
          </div>
          <div className="sub-header-content sub-header-activity">
            <span>
              Đây là những sự kiện, hoạt động ghi dấu ấn của OTSV trong năm{" "}
            </span>
          </div>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-image">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/856461119-1651826969211-607631360-1649758137013-neuyouthfestival2020.jpg"
                alt=""
              />
            </div>
            <div className="activity-info">
              <div className="activity-info-title">
                NEU YOUTH FESTIVAL 2020 - Chuỗi sự kiện chào tân sinh viên ĐH
                Kinh tế quốc dân
              </div>
              <div className="activity-info-date">12/04/2022</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-image">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/136923477-1638332088547-neuyouthfestival2021.jpg"
                alt=""
              />
            </div>
            <div className="activity-info">
              <div className="activity-info-title">
                Ôn thi sinh viên HL - NEU YOUTH FESTIVAL 2021
              </div>
              <div className="activity-info-date">01/12/2021</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-image">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/3312646-1668564520874-hrp01904.jpg"
                alt=""
              />
            </div>
            <div className="activity-info">
              <div className="activity-info-title">
                MỘT HÀNH TRÌNH DÀI ĐẦY TUYỆT VỜI CÙNG GIẤC MƠ BAY UEH 2022 - ÔN
                THI SINH VIÊN.
              </div>
              <div className="activity-info-date">09/11/2022</div>
            </div>
          </div>
        </div>
        <div className="xemthem-button">
          <button>
            Xem thêm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
