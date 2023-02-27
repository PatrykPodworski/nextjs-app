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
      <h1 className="text-xl bold">{title}</h1>
      <div className="flex gap-2 items-center">
        <span className="text-lg italic">{category}</span>
        <span className="text-base">{createdAt}</span>
      </div>
      <article className="max-w-prose my-4">{content}</article>
      <Comments />
      <Link href={`/`}>Back to home</Link>
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
