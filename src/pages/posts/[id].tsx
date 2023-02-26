import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import createRandomPosts from "../../mock/createRandomPosts";
import Comments from "./Comments";
import PostDetails from "@/models/posts/PostDetails";

const Post = ({ title, category, createdAt, content }: PostProps) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <h1>{title}</h1>
        <h2>{category}</h2>
        <caption>{createdAt}</caption>
        <article>{content}</article>
        <Comments />
        <Link href={`/`}>Back to home</Link>
      </main>
    </Layout>
  );
};

type PostProps = Omit<PostDetails, "id">;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = createRandomPosts().map((x) => ({
    params: {
      id: x.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = ({ params }) => {
  if (!params?.id) {
    throw "Missing query parameter id";
  }

  const post = createRandomPosts().find((x) => x.id === params.id);

  if (!post) {
    throw `Post with id ${params.id} was not found`;
  }

  return {
    props: post,
  };
};

export default Post;
