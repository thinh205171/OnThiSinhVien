import React, { FC } from "react";
import Link from "next/link";
import "./itemNews.scss";

interface ItemNewsProps {
  imgSrc: string;
  title: string;
  description: string;
  content: string;
  dateCreate: Date | string;
  category: string;
  slug: string;
}

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `Ngày ${day}/${month}/${year}`;
};

const ItemNews: FC<ItemNewsProps> = (props) => {
  const { imgSrc, title, description, content, dateCreate, category, slug } =
    props;

  const formattedDate = formatDate(
    typeof dateCreate === "string" ? new Date(dateCreate) : dateCreate
  );

  return (
    <Link href={`/news/${encodeURIComponent(slug)}`} passHref className="card">
      <div className="image-box">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="news-content">
        <h2>{title}</h2>
        <p>{formattedDate}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ItemNews;
