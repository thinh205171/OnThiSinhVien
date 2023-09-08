import { Request, Response } from "express";
import * as newsService from "../services/newsService";

const createCate = async (req: Request, res: Response) => {
  try {
    const cateData = req.body;
    const newCate = await newsService.createCate(cateData);
    res.status(201).json({ message: "Category created", category: newCate });
  } catch (error) {
    res.status(500).json({ error: "Could not create category" });
  }
};

const createNews = async (req: Request, res: Response) => {
  try {
    const newsData = req.body;
    const newNews = await newsService.createNews(newsData);
    res.status(201).json({ message: "News created", news: newNews });
  } catch (error) {
    res.status(500).json({ error: "Could not create news" });
  }
};

const getCates = async (req: Request, res: Response) => {
  try {
    const categories = await newsService.getCates();
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: "Could not get categories" });
  }
};

const getNewsByCate = async (req: Request, res: Response) => {
  try {
    const { cateId } = req.params;
    const news = await newsService.getNewsByCate(cateId);
    res.status(200).json({ news });
  } catch (error) {
    res.status(500).json({ error: "Could not get news by category" });
  }
};

const getNewsBySlug = async (req: Request, res: Response) => {
  try {
    const { slugName } = req.params;
    const news = await newsService.getNewsBySlug(slugName);
    res.status(200).json({ news });
  } catch (error) {
    res.status(500).json({ error: "Could not get news by slug" });
  }
};

const getAllNews = async (req: Request, res: Response) => {
  try {
    const news = await newsService.getAllNews();
    res.status(200).json({ news });
  } catch (error) {
    res.status(500).json({ error: "Could not get all news" });
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
