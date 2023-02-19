import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import createRandomPostLinks from "./createRandomPostLinks";
import PostLink from "./posts/models/PostLink";

const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <Head>
        <title>Home page</title>
      </Head>
      <main>
        <h1 className="text-4xl text mb-8">Home page</h1>
        {posts.map((x) => (
          <Link key={x.id} href={x.url} className="flex-col flex">
            <h2>{x.title}</h2>
            <p>{`${x.category} | ${x.createdAt} | ${x.readingTime} min read`}</p>
            <p>{x.description}</p>
          </Link>
        ))}
      </main>
    </Layout>
  );
};

export default Home;

type HomeProps = {
  posts: PostLink[];
};

export const getStaticProps: GetStaticProps<HomeProps> = () => ({
  props: {
    posts: createRandomPostLinks(10),
  },
});
