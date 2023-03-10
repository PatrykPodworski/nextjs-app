import { faker } from "@faker-js/faker";
import PostDetails from "@/models/posts/PostDetails";
import PostLink from "@/models/posts/PostLink";
import { createRandomPostLinks } from "./createRandomPostLinks";

const mapPost = (link: PostLink): PostDetails => ({
  id: link.id,
  title: link.title,
  category: link.category,
  content: faker.lorem.paragraphs(5),
  createdAt: link.createdAt,
});

const createRandomPosts = (): PostDetails[] => {
  return createRandomPostLinks().map(mapPost);
};

export default createRandomPosts;
