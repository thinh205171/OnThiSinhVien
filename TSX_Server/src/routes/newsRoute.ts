import express from "express";
import * as newsController from "../controllers/newsController";

const router = express.Router();

router.post("/news", newsController.createNews);
router.post("/cate", newsController.createCate);
router.get("/cate", newsController.getCates);
router.get("/news", newsController.getAllNews);
router.get("/news/cate/:cateId", newsController.getNewsByCate);
router.get("/news/slug/:slugName", newsController.getNewsBySlug);

export default router;
