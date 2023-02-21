import { faker } from "@faker-js/faker";
import { categories } from "../models/Category";
import PostLink from "../models/PostLink";

const FAKER_SEED = 11;
const NUMBER_OF_POSTS = 10;
const seedFaker = () => faker.seed(FAKER_SEED);

const getId = () => faker.datatype.uuid();

const createRandomPostLink = (id: string): PostLink => ({
  id: id,
  url: `/posts/${id}`,
  category: faker.helpers.arrayElement(categories),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(1),
  createdAt: faker.date.past().toLocaleDateString(),
  readingTime: Math.ceil(faker.datatype.number({ min: 3, max: 14 })),
});

export const createRandomPostLinks = (
  count: number = NUMBER_OF_POSTS
): PostLink[] => {
  seedFaker();
  return Array.from(Array(count).keys()).map(getId).map(createRandomPostLink);
};

export default createRandomPostLinks;
