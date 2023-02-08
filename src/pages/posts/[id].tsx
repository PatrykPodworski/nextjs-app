import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || isNaN(+id)) {
    return null;
  }

  const imageFileName = +id % 2 == 0 ? "church" : "tree";

  return (
    <main>
      <Image
        src={`/images/${imageFileName}.jpg`}
        alt={imageFileName}
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
      <Link href={`/`} as="/fake-url-to-home">
        Back to home
      </Link>
    </main>
  );
};

export default Post;
