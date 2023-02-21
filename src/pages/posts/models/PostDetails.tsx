import Category from "./Category";

type PostDetails = {
  id: string;
  title: string;
  category: Category;
  createdAt: string;
  content: string;
};

export default PostDetails;
