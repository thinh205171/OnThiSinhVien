"use client";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook/useTypedSelector";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { updateUserProfile, authSlice } from "@/redux/features/user/userSlice";
import { toast } from "react-toastify";
import { UpdateData } from "./model";
import "./profile.scss";

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.auth.user);
  const updateStatus = useAppSelector((state) => state.auth.updateStatus);

  console.log(userState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateData>();

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

  const onSubmit = async (data: UpdateData) => {
    try {
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
