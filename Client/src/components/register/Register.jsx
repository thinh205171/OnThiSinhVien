import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import { MenuItem } from "@mui/material";
import { hideRegisterPopup, showRegisterPopup} from "../../actions/registerAction";
import { showLoginPopup } from '../../actions/loginActions';
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SchoolIcon from '@mui/icons-material/School';
import { Box } from "@mui/material";
import axios from 'axios';
import "./register.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 30,
  p: 1,
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all'
  });
  const dispatch = useDispatch();
  const showRegisterPopup = useSelector(
    (state) => state.registerReducer.showRegisterPopup
  );

  if (!showRegisterPopup) {
    return null;
  }

  function handleClose() {
    dispatch(hideRegisterPopup());
  }

  function handleLoginClick() {
    dispatch(hideRegisterPopup());
    dispatch(showLoginPopup())
  }

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3000/register', data);
      alert('Tài khoản đã được lưu.');
      dispatch(hideRegisterPopup()); 
      dispatch(showLoginPopup());
    } catch (error) {
      console.error('Có lỗi xảy ra khi đăng ký tài khoản.', error);

      if (error.response && error.response.data.error === 'Confirm password does not match') {
        alert('Confirm password does not match');
      }

      if (error.response && error.response.data.error === 'Username already exists') {
        alert('Username already exists');
      }

      if (error.response && error.response.data.error === 'Email already exists') {
        alert('Email already exists');
      }

      if (error.response && error.response.data.error === 'Phone number already exists') {
        alert('Phone number already exists');
      }
    }
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <Modal
        open={showRegisterPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Đăng ký
          </Typography>
          <form onSubmit={handleSubmit(onSubmit, onError)} className="form-register">
            <div className="form-row">
              <div className="form-column">
                <Typography variant="h6" component="h3" sx={{ fontSize: "1rem" }}>
                  1. Thông tin cá nhân
                </Typography>
                <TextField
                  fullWidth
                  sx={{ m: 2, width: "90%" }}
                  {...register("fullName", { required: true })}
                  label="Họ tên (*)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.fullName && (
                  <span style={{ color: "red" }}>Họ tên là bắt buộc</span>
                )}
                <TextField
                  fullWidth
                  sx={{ m: 2, width: "90%" }}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  label="Email (*)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Email không hợp lệ</span>
                )}
                <TextField
                  fullWidth
                  sx={{ m: 2, width: "90%" }}
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /^0[0-9]{9}$/,
                  })}
                  label="Số điện thoại (*)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.phoneNumber && (
                  <span style={{ color: "red" }}>
                    Số điện thoại không hợp lệ
                  </span>
                )}
                <TextField
                  fullWidth
                  sx={{ m: 2, width: "90%" }}
                  {...register("schools", { required: true })}
                  select
                  label="Trường học (*)"
                  defaultValue=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="Đại học Bách Khoa Hà Nội">Đại học Bách Khoa Hà Nội</MenuItem>
                  <MenuItem value="Đại học Kinh tế Quốc dân">Đại học Kinh tế Quốc dân</MenuItem>
                </TextField>
                {errors.interests && (
                  <span style={{ color: "red" }}>Sở thích là bắt buộc</span>
                )}
              </div>
              <div className="form-column">
                <Typography variant="h6" component="h3" sx={{ fontSize: "1rem" }}>
                  Thông tin tài khoản
                </Typography>
                <TextField
                  fullWidth
                  sx={{ m: 2, width: "90%" }}
                  {...register("username", {
                    required: true,
                    minLength: 8,
                  })}
                  label="Tài khoản đăng nhập (*)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.username && (
                  <span style={{ color: "red" }}>
                    Tài khoản phải có ít nhất 8 ký tự
                  </span>
                )}
                <TextField
                  fullWidth
                  sx={{ m: 2, width: "90%" }}
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                  label="Mật khẩu (*)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>
                    Mật khẩu phải có ít nhất 8 ký tự và chứa cả chữ và số
                  </span>
                )}
                <TextField
                  fullWidth
                  sx={{ m: 2, width: "90%" }}
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                  label="Xác nhận mật khẩu (*)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.confirmPassword && (
                  <span style={{ color: "red" }}>
                    Mật khẩu xác nhận phải có ít nhất 8 ký tự và chứa cả chữ và số
                  </span>
                )}
              </div>
            </div>
            <Button variant="contained" type="submit" className="login-button">
              Đăng ký
            </Button>

            <p>Hoặc đăng ký bằng</p>

            <Button
              startIcon={<FacebookIcon />}
              variant="contained"
              className="login-facebook"
            >
              Facebook
            </Button>

            <p>
              Đã có tài khoản? <a href="#" onClick={handleLoginClick}>đăng nhập ngay</a>
            </p>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
