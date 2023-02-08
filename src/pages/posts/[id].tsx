import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || isNaN(+id)) {
    return null;
  }

  return (
    <main>
      <h1>This is a post with id: {id}</h1>
      <Link href={`/posts/${+id + 1}`}>Go to the next post</Link>
      <br />
      <Link href={`/posts/${+id - 1 > 0 ? +id - 1 : 0}`}>
        Go to the previous post
      </Link>
      <br />
      <Link href={`/`} as="/fake-url-to-home">
        Back to home
      </Link>
    </main>
  );
};

export default Post;
