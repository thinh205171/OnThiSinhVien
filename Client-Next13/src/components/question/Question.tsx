import { FC } from "react";
import "./question.scss";

const Question: FC = () => {
  return (
    <div>
      <div className="question-content ">
        <div className="container">
          <div className="header-content">
            <div className="main-header-content">
              <h2 style={{ marginBottom: "0" }}>VÌ SAO HƠN 100,000 BẠN CHỌN</h2>
              <h2 style={{ color: "#ec1f24", fontWeight: "500" }}>
                ONTHISINHVIEN.COM
              </h2>
            </div>
            <div className="sub-header-content">
              <span>
                Bí quyết chinh phục điểm A các môn đại cương và chuyên ngành
              </span>
            </div>
          </div>
          <div className="question-list-content">
            <div className="question-item-content">
              <div className="icon-question">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/icon1-why-choose.svg"
                  alt=""
                />
              </div>
              <div className="question-title">
                Em không biết <br />
                môn này học cái gì?
              </div>
              <div className="answer-title">
                Đừng lo, Khóa luyện sẽ "Review đề thi" lại cho em, đề thi có bao
                nhiêu câu, rơi vào những phần kiến thức nào,...
              </div>
            </div>
            <div className="question-item-content">
              <div className="icon-question">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/icon3-why-choose.svg"
                  alt=""
                />
              </div>
              <div className="question-title">
                Em không biết <br />
                bắt đầu học từ đâu?
              </div>
              <div className="answer-title">
                Đừng lo, Khóa luyện luôn tạo ra "Lộ trình học tập" để học từ đầu
                đến cuối, biết mình đang học đến đâu, cần học thêm những gì.
              </div>
            </div>
            <div className="question-item-content">
              <div className="icon-question">
                <img
                  src="https://onthisinhvien.com/images/icon/otsv/icon2-why-choose.svg"
                  alt=""
                />
              </div>
              <div className="question-title">
                Em không biết <br />
                bắt đầu học từ đâu?
              </div>
              <div className="answer-title">
                Đừng lo, Khóa luyện có một "Group chat riêng" để hỗ trợ em, giúp
                em trả lời các câu hỏi, giải đáp các thắc mắc về môn học nhé.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
