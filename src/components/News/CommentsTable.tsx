import { Comment } from "@api/Comments/comments";
import { SingleComent } from "./SingleComent";

interface Props {
  data: Comment[] | undefined;
}
export const CommentsTable = ({ data }: Props) => {
  const CommentSection = data?.map((comment: Comment) => {
    return (
      <SingleComent
        key={comment.id}
        name={comment.user.username}
        body={comment.body}
      />
    );
  });
  return (
    <div className="flex flex-col items-start overflow-y-auto scrollbar scrollbar-thumb-[#c2c2c2] scrollbar-track-white scrollbar-w-[10px]  scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
      <h1 className="text-3xl font-bold ml-7 mb-4">News</h1>
      {CommentSection}
    </div>
  );
};
