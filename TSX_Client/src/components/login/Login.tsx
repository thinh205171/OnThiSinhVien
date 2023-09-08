import { useEffect, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/useTypedSelector.ts";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LoginData } from "./model";
import {
  showRegisterPopup,
  hideLoginPopup,
} from "../../features/header/headerSlice";
import { loginUser, validateToken } from "../../features/user/userSlice";

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

export default function BasicModal(): ReactElement | null {
  const dispatch = useAppDispatch();
  const showLoginPopup = useAppSelector(
    (state) => state.headerPopup.showLoginPopup,
  );

  const loginStatus = useAppSelector((state) => state.auth.loginStatus);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginData>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<LoginData> = async (data: LoginData) => {
    try {
      await dispatch(loginUser(data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(validateToken());
  }, [dispatch]);

  useEffect(() => {
    if (loginStatus === 1) {
      dispatch(hideLoginPopup());
      reset();
    }
  }, [loginStatus, dispatch, reset]);

  if (!showLoginPopup) {
    return null;
  }

  function handleClose() {
    dispatch(hideLoginPopup());
  }

  function handleRegisterClick() {
    dispatch(hideLoginPopup());
    dispatch(showRegisterPopup());
  }

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
              {...register("username", { required: true, minLength: 8 })}
              placeholder="Tài khoản đăng nhập (*)"
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
              sx={{ m: 1 }}
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
              placeholder="Mật khẩu (*)"
              type="password"
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

            <p>
              Không có tài khoản?{" "}
              <a href="#" onClick={handleRegisterClick}>
                đăng ký ngay
              </a>
            </p>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
