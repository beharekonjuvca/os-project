export interface Comment {
  postId: number;
  id: number;
  user: {
    id: number;
    username: string;
  };
  body: string;
}
export interface CommentsResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}
