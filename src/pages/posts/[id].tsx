import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || isNaN(+id)) {
    return null;
  }

  const postTopic = +id % 2 == 0 ? "church" : "tree";

  return (
    <Layout>
      <Head>
        <title>{`Post about ${postTopic}`}</title>
      </Head>
      <main>
        <Image
          src={`/images/${postTopic}.jpg`}
          alt={postTopic}
          width={320}
          height={180}
        />
        <h1>This is a post with id: {id}</h1>
        <Link href={`/posts/${+id + 1}`}>Go to the next post</Link>
        <br />
        <Link href={`/posts/${+id - 1 > 0 ? +id - 1 : 0}`}>
          Go to the previous post
        </Link>
        <br />
        <Link href={`/`}>Back to home</Link>
      </main>
    </Layout>
  );
};

export default Post;
