import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const CommentSection = props => {
  const { comments } = props;
  console.log(props);
  return (
    <div>
      {comments.map(comment => (
        <p key={comment.text}>
          <strong>{comment.username} </strong>
          {comment.text}
        </p>
      ))}
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
