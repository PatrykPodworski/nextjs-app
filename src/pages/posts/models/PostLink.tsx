import Category from "./Category";

type PostLink = {
  id: string;
  url: string;
  title: string;
  category: Category;
  createdAt: string;
  description: string;
  readingTime: number;
};

export default PostLink;
