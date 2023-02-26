import { faker } from "@faker-js/faker";
import { Comment } from "../comments";

const createRandomComment = (id: string): Comment => ({
  id: id,
  author: faker.name.fullName(),
  createdAt: faker.date.past(),
  content: faker.lorem.sentences(),
});

const createRandomComments = (): Comment[] => {
  faker.seed();
  return Array.from(Array(faker.datatype.number({ min: 3, max: 10 })).keys())
    .map((x) => faker.datatype.uuid())
    .map(createRandomComment);
};

export default createRandomComments;
