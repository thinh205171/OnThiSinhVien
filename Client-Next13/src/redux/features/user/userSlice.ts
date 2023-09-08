import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import { LoginData, RegisterData, UpdateData } from "./model";

const LOGIN_STATUS = {
  SUCCESS: 1,
  USERNAME_NOT_FOUND: 2,
  WRONG_PASSWORD: 3,
};

const REGISTER_STATUS = {
  SUCCESS: 4,
  USERNAME_EXIST: 5,
  EMAIL_EXIST: 6,
  PHONE_NUMBER_EXIST: 7,
};

const UPDATE_STATUS = {
  SUCCESS: 8,
  SMT_REMAIN: 9,
  EMAIL_EXIST: 10,
};
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: RegisterData, thunkAPI) => {
    const secretKey =
      "a012d7da44a46d16a3b4173bcde8e771baad27a4d00982eab8c98ec3faa43be5";
    const hashedPassword: string = CryptoJS.AES.encrypt(
      userData.password,
      secretKey,
    ).toString();
    const secureData: RegisterData = {
      ...userData,
      password: hashedPassword,
    };

    try {
      const response = await authService.register(secureData);
      // window.location.reload(true);
      console.log(response.token);
      return { response, status: REGISTER_STATUS.SUCCESS };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: LoginData, thunkAPI) => {
    const secretKey =
      "a012d7da44a46d16a3b4173bcde8e771baad27a4d00982eab8c98ec3faa43be5";
    const hashedPassword: string = CryptoJS.AES.encrypt(
      userData.password,
      secretKey,
    ).toString();

    const secureData: LoginData = {
      ...userData,
      password: hashedPassword,
    };

    try {
      const res = await authService.login(secureData);
      console.log(res.token);
      return { res, status: LOGIN_STATUS.SUCCESS };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUser",
  async (userData: UpdateData, thunkAPI) => {
    try {
      return await authService.updateUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const validateToken = createAsyncThunk(
  "auth/validateToken",
  async (_, thunkAPI) => {
    try {
      return await authService.validateToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const res = await authService.logout();
      console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

interface UserState {
  user: RegisterData | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
  loginStatus: number | null;
  registerStatus: number | null;
  updateStatus: number | null;
}

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  loginStatus: 0,
  registerStatus: 0,
  updateStatus: 0,
} as UserState;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.loginStatus = 0;
      state.registerStatus = 0;
      state.updateStatus = 0;
    },
    resetUpdateStatus: (state) => {
      state.updateStatus = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ response: any; status: number }>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.user = action.payload.response.user;
          state.registerStatus = 1;
          toast.success("User register successfully", { autoClose: 1500 });
        },
      )
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.res.user;
        state.loginStatus = 1;
        toast.success("User login successfully", { autoClose: 1500 });
      })
      .addCase(validateToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        validateToken.fulfilled,
        (
          state,
          action: PayloadAction<{
            user: RegisterData;
            response: any;
            status: number;
          }>,
        ) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.user = action.payload.user;
        },
      )
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateUserProfile.fulfilled,
        (
          state,
          action: PayloadAction<{
            updatedUser: RegisterData;
            response: any;
            status: number;
          }>,
        ) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.user = action.payload.updatedUser;
          state.updateStatus = 1;
        },
      )
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = null;
        state.loginStatus = 0;
        if (state.isSuccess === true) {
          toast.success("User logout successfully", { autoClose: 1500 });
        }
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: AnyAction) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          console.log(action.payload.response);
          if (
            action.payload.response.data.status ===
            LOGIN_STATUS.USERNAME_NOT_FOUND
          )
            toast.error("Username does not exist", { autoClose: 1500 });
          else if (
            action.payload.response.data.status === LOGIN_STATUS.WRONG_PASSWORD
          )
            toast.error("Wrong password", { autoClose: 1500 });
          else if (
            action.payload.response.data.status ===
            REGISTER_STATUS.USERNAME_EXIST
          )
            toast.error("Username have existed already", { autoClose: 1500 });
          else if (
            action.payload.response.data.status === REGISTER_STATUS.EMAIL_EXIST
          )
            toast.error("Email have existed already", { autoClose: 1500 });
          else if (
            action.payload.response.data.status ===
            REGISTER_STATUS.PHONE_NUMBER_EXIST
          )
            toast.error("Phone number have existed already", {
              autoClose: 1500,
            });
          else if (
            action.payload.response.data.status === UPDATE_STATUS.SMT_REMAIN
          ) {
            toast.warn("Nothing changed to update", { autoClose: 1500 });
          } else if (
            action.payload.response.data.status === UPDATE_STATUS.EMAIL_EXIST
          ) {
            toast.error("Email have existed already", { autoClose: 1500 });
          }
        },
      );
  },
});

export default authSlice.reducer;
