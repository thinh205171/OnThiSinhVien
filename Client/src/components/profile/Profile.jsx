import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./profile.scss";
import {
  updateUserProfile,
  authSlice,
  validateToken,
} from "../../featutes/user/userSlice.js";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  const updateStatus = useSelector((state) => state.auth.updateStatus);

  // useEffect(() => {
  //   dispatch(validateToken());
  // }, [dispatch]);

  console.log(userState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userState) {
      setValue("fullName", userState.fullName);
      setValue("schools", userState.schools);
      setValue("email", userState.email);
    }
  }, [userState, setValue]);

  useEffect(() => {
    if (updateStatus === 1) {
      toast.success("User updated successfully", { autoClose: 1500 });
      dispatch(authSlice.actions.resetUpdateStatus());
    }
  }, [updateStatus, dispatch]);

  const onSubmit = async (data) => {
    try {
      data.username = userState?.username;
      dispatch(updateUserProfile(data));
    } catch (error) {
      console.error("Can not update", error);
    }
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container">
          <h2 className="profile-title">Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className="profile-input"
              // label="Full Name"
              // defaultValue={userState?.fullName}
              {...register("fullName")}
              fullWidth
              error={!!errors.fullName}
              helperText={errors.fullName ? "Full Name is required" : ""}
            />
            <br />
            <TextField
              className="profile-input"
              // label="Schools"
              // defaultValue={userState?.schools}
              {...register("schools")}
              fullWidth
              error={!!errors.schools}
              helperText={errors.schools ? "Schools is required" : ""}
            />
            <br />
            <TextField
              className="profile-input"
              // label="Email"
              // defaultValue={userState?.email}
              {...register("email")}
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? "Email is required" : ""}
            />
            <br />
            {userState ? (
              <div className="profile-button">
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
