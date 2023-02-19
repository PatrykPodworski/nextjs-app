export const categories = [
  "Programming",
  "Culture",
  "Travel",
  "Sport",
  "Cuisine",
] as const;

type Category = typeof categories[number];

export default Category;
