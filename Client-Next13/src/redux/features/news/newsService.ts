import axios, { AxiosResponse } from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
import { CateData, NewsData } from "./model";

const getCategory = async () => {
  const res: AxiosResponse = await axios.get(`${base_url}cate`);
  if (res.data) return res.data;
};

const getAllNews = async () => {
  const res: AxiosResponse = await axios.get(`${base_url}news`);
  if (res.data) return res.data;
};

const getNewsByCategory = async (cateId: string) => {
  const res: AxiosResponse = await axios.get(`${base_url}news/cate/${cateId}`);
  if (res.data) return res.data;
};

const getANewsBySlug = async (slug: string) => {
  const res: AxiosResponse = await axios.get(`${base_url}news/slug/${slug}`);
  if (res.data) return res.data;
};

export const newsService = {
  getCategory,
  getAllNews,
  getNewsByCategory,
  getANewsBySlug,
};
