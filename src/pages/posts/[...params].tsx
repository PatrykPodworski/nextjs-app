import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <main>
      <h1>This is a post page with catch all: {JSON.stringify(params)}</h1>
      <Link href="/posts/1">Go to the first post</Link>
      <br />
      <Link href="/">Back to home</Link>
    </main>
  );
};

export default Post;
