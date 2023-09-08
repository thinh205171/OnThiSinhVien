"use client"
import { FC, useState } from "react";
import "./system.scss";

const System: FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="system-content-container">
        <div className="system-header-content">
          <div className="main-header-content">
            <h1>HỆ THỐNG ÔN THI SINH VIÊN</h1>
          </div>
        </div>

        <div className="system-main-content">
          <div className="system-button-list">
            <button
              className={`system-button ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleButtonClick(0)}
            >
              TẦM NHÌN
            </button>
            <button
              className={`system-button ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              SỨ MỆNH
            </button>
            <button
              className={`system-button ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleButtonClick(2)}
            >
              GIÁ TRỊ CỐT LÕI
            </button>
            <button
              className={`system-button ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleButtonClick(3)}
            >
              CHẶNG ĐƯỜNG PHÁT TRIỂN
            </button>
            <button
              className={`system-button ${activeIndex === 4 ? "active" : ""}`}
              onClick={() => handleButtonClick(4)}
            >
              VĂN HÓA
            </button>
          </div>
        </div>

        <div
          className={`first-system system-description ${activeIndex === 0 ? "block" : "hidden"
            }`}
        >
          <div className="system-image">
            <img
              src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Ftam-nhin.png&w=1920&q=75"
              alt=""
            />
          </div>
          Bằng nỗ lực sáng tạo nội dung, công nghệ và đổi mới trong quản trị,{" "}
          <span style={{ color: "#1c3967", fontWeight: "600" }}>
            ÔN THI SINH VIÊN
          </span>{" "}
          mong muốn trở thành công ty có phần mềm luyện thi được sinh viên sử
          dụng phổ biến nhất trong nước.
        </div>
        <div
          className={`first-system system-description ${activeIndex === 1 ? "block" : "hidden"
            }`}
        >
          <div className="system-image">
            <img
              src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fsu-menh.png&w=1200&q=75"
              alt=""
            />
          </div>
          Sứ mệnh của OTSV là phát triển phần mềm luyện thi thay đổi cách học và
          ôn thi thông qua công cụ với nội dung bám sát chương trình học và tính
          năng thông minh tăng hiệu quả học tập.
        </div>
        <div
          className={`first-system system-description ${activeIndex === 2 ? "block" : "hidden"
            }`}
        >
          <div className="value-system">
            <div className="value-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/tam-huyet.svg"
                alt=""
              />
            </div>
            <div className="value-content">
              <div className="value-title-content">TÂM HUYẾT</div>
              <div className="value-description-content">
                Đội ngũ Ôn thi sinh viên từ những anh/chị biên soạn nội dung,
                đến anh/chị admin tin tức và admin học tập luôn
                <span style={{ color: "#1c3967", fontWeight: "600" }}>
                  {" "}
                  NHIỆT TÌNH, TÂM HUYẾT{" "}
                </span>
                phục vụ vì sinh viên, là người bạn đồng hành trong học tập.
              </div>
            </div>
          </div>
          <div className="value-system">
            <div className="value-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"
                alt=""
              />
            </div>
            <div className="value-content">
              <div className="value-title-content">CHẤT LƯỢNG</div>
              <div className="value-description-content">
                Các khóa luyện luôn bám sát chương trình học và đề thi theo từng
                trường đại học. Sinh viên có thể làm quen với các dạng bài tập,
                câu hỏi lý thuyết để tăng tốc độ làm đề. Bằng ứng dụng CNTT sẽ
                giúp sinh viên học tập mọi lúc mọi nơi, trên nhiều thiết bị. Tự
                động xác định những phần kiến thức yếu của học viên để cải
                thiện.
              </div>
            </div>
          </div>
          <div className="value-system">
            <div className="value-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/con-nguoi.svg"
                alt=""
              />
            </div>
            <div className="value-content">
              <div className="value-title-content">CON NGƯỜI</div>
              <div className="value-description-content">
                OTSV team gồm các anh/chị không chỉ
                <span style={{ color: "#1c3967", fontWeight: "600" }}>
                  {" "}
                  GIỎI CHUYÊN MÔN, KỸ NĂNG VĂN PHÒNG{" "}
                </span>
                mà còn năng động và sáng tạo. Không ngừng học hỏi và vượt qua
                mọi giới hạn. Sẵn sàng tiếp nhận tích cực những đóng góp từ phía
                học viên và cải thiện nội dung hàng kỳ. Giữ trong mình những
                chuẩn mực đạo đức, văn hóa và tác phong làm việc chuyên nghiệp
              </div>
            </div>
          </div>
        </div>
        <div
          className={`first-system system-description ${activeIndex === 3 ? "block" : "hidden"
            }`}
        >
          <div className="dev-system">
            <div className="dev-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"
                alt=""
              />
            </div>
            <div className="dev-description-content">
              Năm 2014, Mở các lớp ôn luyện trực tiếp đầu tiên tại NEU
            </div>
          </div>
          <div className="dev-system">
            <div className="dev-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"
                alt=""
              />
            </div>
            <div className="dev-description-content">
              Năm 2017, Phát triển, mở rộng thị trường theo hướng phần mềm luyện
              thi như ngày nay, tiền thân là hocthongminh.com
            </div>
          </div>
          <div className="dev-system">
            <div className="dev-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"
                alt=""
              />
            </div>
            <div className="dev-description-content">
              Năm 2019-2020, Mở rộng các chi nhánh (NEU, HUCE, UEH, UEL, TMU,
              HVTC,..) và lấy tên gọi chính thức là Ôn thi sinh viên vào ngày:
              01/08/2019
            </div>
          </div>
          <div className="dev-system">
            <div className="dev-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"
                alt=""
              />
            </div>
            <div className="dev-description-content">
              Năm 2021, Tận dụng cơ hội phát triển thương hiệu và vươn lên trở
              thành chuyên nghiệp
            </div>
          </div>
        </div>
        <div
          className={`first-system system-description ${activeIndex === 4 ? "block" : "hidden"
            }`}
        >
          <div className="culture-youtube">
            <iframe
              width="80%"
              height="350"
              src="https://www.youtube.com/embed/L1kI-MVZtEY"
              title="YouTube video player"
              allowFullScreen
              className="video"
            ></iframe>
          </div>
          <div className="value-system">
            <div className="value-image">
              <img
                src="https://onthisinhvien.com/images/icon/otsv/chat-luong.svg"
                alt=""
              />
            </div>
            <div className="value-content">
              <div className="value-description-content culture-des">
                Tổ chức và duy trì các hoạt động văn hóa giải trí sau những giờ
                làm việc căng thẳng, và là cầu nối, động viên tinh thần, gắn kết
                các thành viên. Môi trường làm việc trẻ trung, năng động, bình
                đẳng và hồn nhiên. Các hoạt động nổi bật:
              </div>
            </div>
          </div>
          <div className="culture-activity">
            <div>+ Cắm trại</div>
            <div>+ Họp team định kỳ</div>
            <div>+ Đào tạo nội bộ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
