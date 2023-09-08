import { ReactElement } from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // import "./style.css";
import "./slider.scss"; // import required modules
import { Pagination } from "swiper/modules";

import "./styles.css";

export default function Slider(): ReactElement {
  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string): string {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="container">
      <div className="slider">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper slider-swiper"
        >
          <SwiperSlide>
            <div>
              <img
                className="mySlides"
                alt=""
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/252455222-1667299309211-bannerwebsiteonthisinhvien4.png"
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="mySlides"
                alt=""
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/496732207-1667300595885-bannerwebsiteonthisinhvien.gif"
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="mySlides"
                alt=""
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/925741297-1667276386085-bannerwebsiteonthisinhvien.png"
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="mySlides"
                alt=""
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/299611416-1667299753643-bannerwebsiteonthisinhvien7.png"
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="mySlides"
                alt=""
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/925741297-1667276386085-bannerwebsiteonthisinhvien.png"
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="mySlides"
                alt=""
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/496732207-1667300595885-bannerwebsiteonthisinhvien.gif"
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
