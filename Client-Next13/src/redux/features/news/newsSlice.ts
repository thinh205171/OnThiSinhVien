import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newsService } from "./newsService";
import { CateData, NewsData } from "./model";

export const getAllCate = createAsyncThunk(
  "news/getCates",
  async (_, thunkAPI) => {
    try {
      return await newsService.getCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllNews = createAsyncThunk(
  "news/getNews",
  async (_, thunkAPI) => {
    try {
      return await newsService.getAllNews();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNewsByCategory = createAsyncThunk(
  "news/getANews",
  async (cateId: string, thunkAPI) => {
    try {
      return await newsService.getNewsByCategory(cateId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getANewsBySlug = createAsyncThunk(
  "news/getANewsBySlug",
  async (slug: string, thunkAPI) => {
    try {
      return await newsService.getANewsBySlug(slug);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface NewsState {
  category: CateData[] | null;
  news: NewsData[] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
}

const initialState = {
  category: null,
  news: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
} as NewsState;

export const newsSlice = createSlice({
  name: "news&cate",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAllCate.fulfilled,
        (
          state,
          action: PayloadAction<{ response: any; categories: CateData[] }>
        ) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.category = action.payload.categories;
        }
      )
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAllNews.fulfilled,
        (state, action: PayloadAction<{ response: any; news: NewsData[] }>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.news = action.payload.news;
        }
      )
      .addCase(getNewsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getNewsByCategory.fulfilled,
        (state, action: PayloadAction<{ response: any; news: NewsData[] }>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.news = action.payload.news;
        }
      )
      .addCase(getANewsBySlug.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getANewsBySlug.fulfilled,
        (state, action: PayloadAction<{ response: any; news: NewsData[] }>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.news = action.payload.news;
        }
      );
  },
});

export default newsSlice.reducer;
