import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import "./feedback.scss";

// import required modules
import {Navigation, Pagination} from "swiper/modules";

const Feedback = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="feedback-content container">
      <div className="header-content">
        <div className="main-header-content">
          <h2>PHẢN HỒI CỦA HỌC VIÊN KỲ TRƯỚC</h2>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={pagination}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/702405228-1649216842296-dothu.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/661009517-1649216710299-anhngocphan.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/774990213-1649217469173-tranvan.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/661009517-1649216710299-anhngocphan.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/548238442-1649217409423-trankhacan.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/479012615-1649216916801-hohue.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/533496497-1649217638632-vinhduong.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="feedback-name">Hồ Huệ</div>
            <div className="image-box">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/702405228-1649216842296-dothu.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Feedback;
