import { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import axios from "axios";
import CommentsList from "../CommentsList";
import AddCommentForm from "../AddCommentForm";
import articles from "../article-content";
import userUser from "../useUser";
import "../styles.css";

export default function ArticlePage() {
  const { name } = useParams();
  const { upvotes: initialUpvotes, comments: initialComments } =
    useLoaderData();
  const { isLoading, user } = userUser();

  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [comments, setComments] = useState(initialComments);

  const article = articles.find((a) => a.name === name);

  async function onUpvoteClicked() {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    const response = await axios.post(
      "/api/articles/" + name + "/upvote",
      null,
      { headers }
    );

    const updatedArticleData = response.data;
    setUpvotes(updatedArticleData.upvotes);
  }

  async function onAddComment({ nameText, commentText }) {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    const response = await axios.post(
      "/api/articles/" + name + "/comments",
      {
        postedBy: nameText,
        text: commentText,
      },
      { headers }
    );

    const updatedArticleData = response.data;
    setComments(updatedArticleData.comments);
  }

  return (
    <div className="page-container">
      <h1>{article.title}</h1>
      {user && (
        <button onClick={onUpvoteClicked} disabled={isLoading}>
          Upvote
        </button>
      )}
      <p>This article has {upvotes} upvotes!</p>
      <div className="article-content">
        {article.content.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="comment-section">
        {user ? (
          <AddCommentForm onAddComment={onAddComment} />
        ) : (
          <p>Log in to add a comment</p>
        )}
        <CommentsList comments={comments} />
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const response = await axios.get("/api/articles/" + params.name);
  const { upvotes, comments } = response.data;

  return { upvotes, comments };
}
