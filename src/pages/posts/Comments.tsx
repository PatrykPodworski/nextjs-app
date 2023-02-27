import useSWR from "swr";
import axios from "axios";
import { Comment } from "../api/posts/comments";

const Comments = () => {
  const { data, error, isLoading } = useSWR<Comment[]>(
    "/api/posts/comments",
    (key) =>
      axios
        .get<Comment[]>(key)
        .then((x) =>
          x.data.map((y) => ({ ...y, createdAt: new Date(y.createdAt) }))
        )
  );

  if (error) {
    return <p className="text-lg text-red-500">Error!</p>;
  }

  if (isLoading || !data) {
    return <p className="text-lg text-green-500">Loading...</p>;
  }

  console.log(typeof data[0].createdAt);

  return (
    <>
      {data.map((x) => (
        <section key={x.id} className="my-4">
          <p className="flex gap-2">
            <span className="font-bold">{x.author}</span>
            <span className="italic">{x.createdAt.toLocaleDateString()}</span>
          </p>
          <p className="max-w-prose">{x.content}</p>
        </section>
      ))}
    </>
  );
};

export default Comments;
