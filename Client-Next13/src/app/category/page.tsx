"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook/useTypedSelector";
import {
  getAllCate,
  getAllNews,
  getNewsByCategory,
} from "@/redux/features/news/newsSlice";
import ItemNews from "@/components/itemNews/ItemNews";
import "./cate.scss";

const Page: FC = () => {
  const dispatch = useAppDispatch();
  const [focusedCategory, setFocusedCategory] = useState("Tat-ca-tin-tuc");

  const handleCategoryClick = (categoryName: string) => {
    setFocusedCategory(categoryName);
    dispatch(getNewsByCategory(categoryName));
  };

  useEffect(() => {
    dispatch(getAllNews());
    dispatch(getAllCate());
  }, []);

  const newsState = useAppSelector((state) => state.news.news);
  const cateState = useAppSelector((state) => state.news.category);

  return (
    <div className="news">
      <div className="container">
        <div className="sidenav-category">
          <ul>
            <li
              className={focusedCategory === "Tat-ca-tin-tuc" ? "focused" : ""}
              onClick={() => {
                setFocusedCategory("Tat-ca-tin-tuc");
                dispatch(getAllNews());
              }}
            >
              <p>Tất cả tin tức</p>
            </li>
            {cateState?.map((category) => (
              <li
                key={category._id}
                className={focusedCategory === category._id ? "focused" : ""}
                onClick={() => handleCategoryClick(category._id)}
              >
                <p>{category.cateName}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="news-list">
          {newsState ? (
            newsState.map((newsItem) => (
              <ItemNews
                key={newsItem._id}
                imgSrc={newsItem.imgSrc}
                title={newsItem.title}
                description={newsItem.description}
                content={newsItem.content}
                dateCreate={newsItem.dateCreate}
                category={newsItem.category}
                slug={newsItem.slug}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
