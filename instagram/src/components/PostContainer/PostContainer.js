import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardBody,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from "reactstrap";
import moment from "moment";
import "./PostContainer.css";

const PostContainer = props => {
  console.log(props.data);
  const { thumbnailUrl, username, imageUrl, likes, timestamp } = props.data;
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
          <CardBody className="border-bottom px-0 py-3 mx-3 my-0">
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
            <small className="text-muted">
              {moment(timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
            </small>
          </CardBody>
          <InputGroup>
            <Input
              className="m-0 h-100 border-0 p-3"
              placeholder="Add a comment..."
            />
            <InputGroupAddon addonType="append">
              <Button className="btn" type="button" color="link">
                <i className="fas fa-ellipsis-h fa-lg" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
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
