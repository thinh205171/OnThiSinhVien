"use client";
import { getANewsBySlug } from "@/redux/features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook/useTypedSelector";
import React, { useEffect } from "react";
import "./news.scss";

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `Ngày ${day}/${month}/${year}`;
};

const NewsDetailPage = ({ params }: { params: { slug: string } }) => {
  const dispatch = useAppDispatch();
  const newsState = useAppSelector((state) => state.news.news);
  const newsItem = newsState ? newsState[0] : null;
  let formattedDate = "";
  if (newsItem) {
    formattedDate = formatDate(
      typeof newsItem?.dateCreate === "string"
        ? new Date(newsItem.dateCreate)
        : newsItem?.dateCreate
    );
  }

  useEffect(() => {
    dispatch(getANewsBySlug(params.slug));
  }, [dispatch]);

  return (
    <div className="news-detail">
      <div className="container">
        {newsItem ? (
          <div className="">
            <h1 className="news-header">{newsItem.title}</h1>
            <div className="news-image">
              <img src={newsItem.imgSrc} alt="" />
            </div>
            <p className="news-date">{formattedDate}</p>
            <p className="news-descrip">{newsItem.description}</p>
            <p className="news-content-detail">{newsItem.content}</p>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;
