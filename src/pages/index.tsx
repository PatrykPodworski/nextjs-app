import Link from "next/link";

const Home = () => (
  <main>
    <h1>Home page</h1>
    <Link href="/posts/1">Go to the first post</Link>
  </main>
);

export default Home;
