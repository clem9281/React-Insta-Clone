import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import { Card, CardImg, CardBody, Row, Col } from "reactstrap";
import "./PostContainer.css";

const PostContainer = props => {
  console.log(props.data);
  const { thumbnailUrl, username, imageUrl, likes } = props.data;
  return (
    <Row>
      <Col
        xs={{ size: 10, offset: 1 }}
        md={{ size: 8, offset: 2 }}
        lg={{ size: 6, offset: 3 }}
      >
        <Card className="w-100 w-md-50 mx-auto my-5">
          <Row noGutters={true}>
            <Col xs="2" className=" text-center">
              <img
                src={thumbnailUrl}
                alt=""
                className="rounded-circle w-75 py-2"
              />
            </Col>
            <Col className="d-flex align-items-center">
              <strong className="my-0 mx-0">{username}</strong>
            </Col>
          </Row>
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
          <CardBody>
            <div className="likes">
              <p className="mb-0">
                <i className="far fa-heart fa-lg pr-2" />
                <i className="far fa-comment fa-lg" />
              </p>
              <p>
                <strong>{likes} likes</strong>
              </p>
            </div>
            <CommentSection comments={props.data.comments} />
          </CardBody>
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
