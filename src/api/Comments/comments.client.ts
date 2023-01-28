import { apiRequest } from "../Api";
import { Comment, CommentsResponse } from "./comments";

export const getAllComments = () =>
  apiRequest<{}, CommentsResponse>({ url: "comments" });
export const getSingleComment = (id: number) =>
  apiRequest<{}, Comment>({ url: `comments/${id}` });
