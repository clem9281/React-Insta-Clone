import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import { Card, CardImg, Row, Col } from "reactstrap";

import "./PostContainer.css";

const PostContainer = props => {
  // console.log(props);
  const {
    thumbnailUrl,
    username,
    imageUrl,
    likes,
    timestamp,
    comments
  } = props.data;
  return (
    <Row>
      <Col
        xs={{ size: 12 }}
        md={{ size: 8, offset: 2 }}
        lg={{ size: 6, offset: 3 }}
      >
        <Card className="w-100 mx-auto my-3">
          <Row noGutters={true}>
            <Col xs="2" className="text-center pl-3 pr-2">
              <img
                src={thumbnailUrl}
                alt=""
                className="rounded-circle w-100 py-4"
              />
            </Col>
            <Col xs="10" className="d-flex align-items-center">
              <strong className="my-0 mx-0">{username}</strong>
            </Col>
          </Row>
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
          <CommentSection
            postOwner={username}
            comments={comments}
            timestamp={timestamp}
            likes={likes}
          />
        </Card>
      </Col>
    </Row>
  );
};

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
  })
};
PostContainer.defaultProps = {
  data: []
};

export default PostContainer;
