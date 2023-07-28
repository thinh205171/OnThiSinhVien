import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { showLoginPopup } from '../../actions/loginActions';
import { showRegisterPopup } from "../../actions/registerAction";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const account = useSelector(state => state.authReducer.account);

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLoginClick() {
    dispatch(showLoginPopup())
  }

  function handleRegisterClick() {
    dispatch(showRegisterPopup())
  }

  function handleProfileClick() {
    navigate('/profile');
  }

  return (
    <div className={`header  ${isScrolling ? "scroll" : ""}`}>
      <div className="container">
        <div className="left-header">
          <div className="logo-header">
            <Link to="/">
              <img
                src="https://storage.googleapis.com/onthisinhvien.appspot.com/images/866522074-1604980770701-hltron1(1).png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="text-header">
            <p>LẤY NGAY A+</p>
          </div>
        </div>
        <div className="right-header">
          <div className="nav-list">
            <div className="item-header">
              <Link to="/">TRANG CHỦ</Link>
            </div>
            <div className="item-header">
              <Link to="/">KHÓA HỌC</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/">ĐẠI HỌC KINH TẾ QUỐC DÂN</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC XÂY DỰNG</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC KINH TẾ THÀNH PHỐ HỒ CHÍ MINH</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC KINH TẾ - LUẬT HỒ CHÍ MINH</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC KINH TẾ NGÂN HÀNG HỒ CHÍ MINH</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC BÁCH KHOA HÀ NỘI</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC NGÂN HÀNG</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC THƯƠNG MẠI</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC TÀI CHÍNH - MARKETING</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC TÔN ĐỨC THẮNG</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC VINH</Link>
                </li>
                <li>
                  <Link to="/">HỌC VIỆN TÀI CHÍNH</Link>
                </li>
                <li>
                  <Link to="/">HỌC VIỆN NGÂN HÀNG</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC BÁCH KHOA THÀNH PHỐ HỒ CHÍ MINH</Link>
                </li>
                <li>
                  <Link to="/">ĐẠI HỌC CÔNG ĐOÀN</Link>
                </li>
              </ul>
            </div>
            <div className="item-header">
              <Link to="/">TÀI LIỆU</Link>
            </div>
            <div className="item-header">
              <Link to="/">TIN TỨC</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/">KỲ THI ĐGNL & ĐGTD</Link>
                </li>
                <li>
                  <Link to="/">SỔ TAY SINH VIÊN</Link>
                </li>
                <li>
                  <Link to="/">TÀI LIỆU AUTOCAD</Link>
                </li>
                <li>
                  <Link to="/">TÀI LIỆU</Link>
                </li>
                <li>
                  <Link to="/">HOẠT ĐỘNG TIÊU BIỂU</Link>
                </li>
                <li>
                  <Link to="/">ƯU ĐÃI</Link>
                </li>
                <li>
                  <Link to="/">TIN TỨC NỔI BẬT</Link>
                </li>
                <li>
                  <Link to="/">TUYỂN DỤNG</Link>
                </li>
              </ul>
            </div>
            <div className="item-header">
              <Link to="/">KÍCH HOẠT</Link>
            </div>
            <div className="item-header cart-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="red"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div className="item-header">
              {account ? (
                <div className="user-info">
                  <p>{account.user?.fullName}</p>
                  <ul className="dropdown">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <a href="/">Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="action-header">
                  <button className="login" onClick={handleLoginClick}>ĐĂNG NHẬP</button>
                  <button className="signup" onClick={handleRegisterClick}>ĐĂNG KÝ</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hide-header">
          <div className="hide-header-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fillRule="red"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div className="hide-header-action">
            <button className="login-button hide-button-action">
              <Link to="/">Đăng nhập</Link>
            </button>
            <button className="hide-button-action">
              <Link to="/">Đăng ký</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
