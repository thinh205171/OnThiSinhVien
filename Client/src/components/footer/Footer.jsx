import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-list">
          <div className="information">
            <div className="footer-header">THÔNG TIN</div>
            <div className="footer-item-detail">
              <a href="mailto:info@onthisinhvien.com">
                Email: info@onthisinhvien.com
              </a>
              <a href="tel:+0345899842">Hotline: 0345899842</a>
              <span>Giờ làm việc: 8h00 - 11h30, 14h - 17h30</span>
              <span>Khác</span>
              <div>
                <img
                  src="https://onthisinhvien.com/resources/images/dathongbao.png"
                  alt=""
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29798.037172372737!2d105.845279!3d21.00247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad1df7f3d4c7%3A0x15f24c1278810bcf!2zw5RuIHRoaSBzaW5oIHZpw6puIEhM!5e0!3m2!1svi!2sus!4v1687800872708!5m2!1svi!2sus"
                  width="100"
                  height="90"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="utility">
            <div className="footer-header">TIỆN ÍCH</div>
            <div className="footer-item-detail">
              <a href="/">Trang chủ</a>
              <a href="/">Khóa học</a>
              <a href="/">Tuyển dụng</a>
              <a href="/">Đề thi</a>
              <a href="/">Tin tức</a>
            </div>
          </div>
          <div className="policy">
            <div className="footer-header">CHÍNH SÁCH</div>
            <div className="footer-item-detail">
              <a href="/">Những câu hỏi thường gặp</a>

              <a href="/">
                Bộ quy tắc hành xử của <br /> mentor và học viên trên otsv
              </a>

              <a href="/">Chính sách chung</a>

              <a href="/">
                Chính sách bảo mật thông <br /> tin
              </a>

              <a href="/">
                Hướng dẫn kích hoạt khóa <br /> học
              </a>

              <a href="/">Chính sách hoàn trả học phí</a>
            </div>
          </div>
          <div className="cooperate">
            <div className="footer-header">HỢP TÁC & LIÊN KẾT</div>
            <div className="footer-item-detail">
              <a href="/">Shopee UEH, UEL</a>
              <a href="/">Shopee NEU</a>
              <a href="/">Shopee VPP</a>
              <a href="/">Shopee TMU, HVTC</a>
              <a href="/">Shopee HUCE</a>
              <a href="/">
                <img
                  src="https://onthisinhvien.com/resources/images/otsv/shoppe.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="download">
            <div className="footer-header">TẢI APP</div>
            <div className="footer-item-detail">
              <img
                src="https://onthisinhvien.com/resources/images/otsv/chplay-download.png"
                alt=""
              />
              <img
                src="https://onthisinhvien.com/resources/images/otsv/app-store-download.png"
                alt=""
              />
              <span>
                Kết nối với chúng <br /> tôi
              </span>
              <div className="connect-social-list">
                <a href="/">
                  <img
                    src="https://onthisinhvien.com/resources/images/otsv/youtube.svg"
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    src="https://onthisinhvien.com/resources/images/otsv/fb.svg"
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    src="https://onthisinhvien.com/resources/images/otsv/tiktok.svg"
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    src="https://onthisinhvien.com/resources/images/otsv/ins.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-address">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            Địa Chỉ: Số 69, Ngõ 40 Tạ Quang Bửu, Q.Hai Bà Trưng, TP. Hà <br />{" "}
            Nội
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
