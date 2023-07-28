import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { hideRegisterPopup, showRegisterPopup } from "../../actions/registerAction";
import { showLoginPopup, hideLoginPopup } from '../../actions/loginActions';
import { loginSuccess } from "../../actions/userAction";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import "./login.scss";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 30,
  p: 4,
};

export default function BasicModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all"
  });
  const dispatch = useDispatch();
  const showLoginPopup = useSelector(
    (state) => state.loginReducer.showLoginPopup
  );

  if (!showLoginPopup) {
    return null;
  }

  function handleClose() {
    dispatch(hideLoginPopup());
  }

  function handleRegisterClick() {
    dispatch(hideLoginPopup());
    dispatch(showRegisterPopup())
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data);
      const account = response.data;
      dispatch(loginSuccess(account));
      alert('Login successful');
      dispatch(hideLoginPopup());

    } catch (error) {
      console.error('User not found', error);

      if (error.response && error.response.data.error === 'User not found') {
        alert('User not found');
      }
    }
  };

  return (
    <div>
      <Modal
        open={showLoginPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Đăng nhập
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="form-login">
            <TextField
              fullWidth
              sx={{ m: 2 }}
              {...register("username", { required: true })}
              placeholder="Tài khoản đăng nhập (*)"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.username && <span style={{ color: 'red' }}>Usename is required</span>}
            <TextField
              fullWidth
              sx={{ m: 1 }}
              {...register("password", { required: true })}
              placeholder="Mật khẩu (*)"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && <span style={{ color: 'red' }}>Password is required</span>}

            <a href="/">Quên mật khẩu</a>

            <Button variant="contained" type="submit" className="login-button">
              Đăng nhập
            </Button>

            <p>Hoặc đăng nhập bằng</p>

            <Button
              startIcon={<FacebookIcon />}
              variant="contained"
              className="login-facebook"
            >
              Facebook
            </Button>

            <p>Không có tài khoản? <a href="#" onClick={handleRegisterClick}>đăng ký ngay</a></p>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
