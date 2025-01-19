import { useState } from "react";
import "./styles.css";

export default function AddCommentForm({ onAddComment }) {
  const [nameText, setNameText] = useState("");
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!nameText || !commentText) {
      setError("Both fields are required!");
      return;
    }
    onAddComment({ nameText, commentText });
    setNameText("");
    setCommentText("");
    setError("");
  };

  return (
    <div className="form-container">
      <h3>Add a Comment</h3>
      {error && <p className="form-error">{error}</p>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment here"
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Add Comment</button>
    </div>
  );
}
