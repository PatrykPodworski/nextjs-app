import { faker } from "@faker-js/faker";
import { categories } from "./posts/models/Category";
import PostLink from "./posts/models/PostLink";

const getId = () => faker.datatype.uuid();

const createRandomPostLink = (id: string): PostLink => ({
  id: id,
  url: `/posts/${id}`,
  category: faker.helpers.arrayElement(categories),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(1),
  createdAt: faker.date.past().toLocaleDateString(),
  readingTime: Math.ceil(Math.random() * 20),
});

const createRandomPostLinks = (count: number) =>
  Array.from(Array(count).keys()).map(getId).map(createRandomPostLink);

export default createRandomPostLinks;
