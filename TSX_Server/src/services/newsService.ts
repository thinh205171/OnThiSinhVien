import Category from "../models/Category";
import News from "../models/News";

interface CateData {
  cateName: string;
  slug: string;
}

interface NewsData {
  imgSrc: string;
  title: string;
  description: string;
  content: string;
  dateCreate: Date;
  category: string;
  slug: string;
}

const createCate = async (cateData: CateData) => {
  try {
    const existingCate = await Category.findOne({
      cateName: cateData.cateName,
    });
    if (existingCate) {
      throw new Error("Existing Category");
    }

    const newCate = new Category(cateData);
    const savedCate = await newCate.save();
    return savedCate.toObject();
  } catch (error) {
    throw new Error("Can not create new category");
  }
};

const createNews = async (newsData: NewsData) => {
  try {
    const existingNews = await News.findOne({
      title: newsData.title,
    });
    if (existingNews) {
      throw new Error("Existing News");
    }

    const newNews = new News(newsData);
    const savedNews = await newNews.save();
    return savedNews.toObject();
  } catch (error) {
    throw new Error("Can not create new news");
  }
};

const getCates = async () => {
  try {
    const categories = await Category.find();
    return categories.map((category) => category.toObject());
  } catch (error) {
    throw new Error("Can not get Category");
  }
};

const getNewsByCate = async (cateId: string) => {
  try {
    const news = await News.find({ category: cateId });
    return news.map((newsItem) => newsItem.toObject());
  } catch (error) {
    throw new Error("Can not get news");
  }
};

const getAllNews = async () => {
  try {
    const news = await News.find();
    return news.map((newsItem) => newsItem.toObject());
  } catch (error) {
    throw new Error("Can not get all news");
  }
};

const getNewsBySlug = async (slug: string) => {
  try {
    const news = await News.find({ slug: slug });
    if (news) return news.map((newsItem) => newsItem.toObject());
    else return "Do not exist news matches slug";
  } catch (error) {
    throw new Error("Can not get news");
  }
};

export {
  createCate,
  createNews,
  getCates,
  getNewsByCate,
  getAllNews,
  getNewsBySlug,
};
