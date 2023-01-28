import { getAllComments } from "@api/Comments/comments.client";
import { useQuery } from "react-query";
import { CommentsTable } from "./CommentsTable";

export const News = () => {
  const { data, isLoading, error } = useQuery("comments", getAllComments);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>"The request to retrive comments failed"</div>}
      {data && <CommentsTable data={data.data?.comments} />}
    </>
  );
};
