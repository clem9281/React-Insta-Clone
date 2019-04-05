import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import { Card, CardImg, Row, Col } from "reactstrap";
import { UserThumbnail, Username } from "../Styles/StyledComponents";

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
          <div>
            <UserThumbnail src={thumbnailUrl} alt="" />
            <Username>{username}</Username>
          </div>
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
          <CommentSection
            localUser={props.localUser}
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
