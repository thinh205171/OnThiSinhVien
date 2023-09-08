export interface CateData {
  _id: string;
  cateName: string;
  slug: string;
}

export interface NewsData {
  _id: string;
  imgSrc: string;
  title: string;
  description: string;
  content: string;
  dateCreate: Date;
  category: string;
  slug: string;
}
