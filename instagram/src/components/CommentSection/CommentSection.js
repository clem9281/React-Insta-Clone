import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  CardBody
} from "reactstrap";
import moment from "moment";
import {
  StyledReactionButton,
  IconWithNoClick,
  FullHeart
} from "../Styles/StyledComponents";
class CommentSection extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      comments: [],
      likes: 0,
      addText: "",
      clickedLikes: false
    };
  }
  componentDidMount() {
    if (localStorage.getItem(this.props.postOwner)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postOwner)),
        likes: this.props.likes
      });
    } else {
      this.setState({
        comments: this.props.comments,
        likes: this.props.likes
      });
      this.localStore(this.props.postOwner, this.props.comments);
    }
  }

  addNewComment = event => {
    event.preventDefault();
    const newData = [
      ...this.state.comments,
      { username: this.props.localUser, text: this.state.addText }
    ];
    this.setState({ comments: newData, addText: "" });
    this.localStore(this.props.postOwner, newData);
  };
  // handle changes in input
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // handles clicking the main heart icon
  handleLikes = event => {
    event.stopPropagation();
    let newLikes = this.state.likes;
    if (!this.state.clickedLikes) {
      newLikes++;
      this.setState({ likes: newLikes, clickedLikes: true });
    } else {
      newLikes--;
      this.setState({ likes: newLikes, clickedLikes: false });
    }
  };
  // handles clicking the icon next to a comment
  handleClickComment = event => {
    // I will change this after we do user stuff tomorrow
    if (event.target.name === this.props.localUser) {
      console.log("found it");
      const newData = this.state.comments.filter(
        element => element.text !== event.target.id
      );
      this.setState({ comments: newData });
      this.localStore(this.props.postOwner, newData);
    }
  };
  // stores data in local storage
  localStore = (name, data) => {
    localStorage.setItem(`${name}`, JSON.stringify(data));
  };
  render() {
    return (
      <CardBody className="px-0 pt-3 pb-0 mx-3 my-0">
        <div className="likes">
          <StyledReactionButton onClick={this.handleLikes}>
            {!this.state.clickedLikes ? (
              <i className="far fa-heart fa-lg pr-2" />
            ) : (
              <FullHeart className="fas fa-heart fa-lg pr-2" />
            )}
          </StyledReactionButton>
          <StyledReactionButton>
            <i className="far fa-comment fa-lg" />
          </StyledReactionButton>

          <p>
            <strong>{this.state.likes} likes</strong>
          </p>
        </div>
        <div className="border-bottom pb-3">
          {this.state.comments.map(comment => (
            <div
              key={comment.text}
              className="mb-1 d-flex align-items-center justify-content-between"
            >
              <p className="mb-0 mr-0 w-75">
                <strong>{comment.username} </strong>
                {comment.text}
              </p>

              <Button
                id={comment.text}
                name={comment.username}
                className="comment-button border-0"
                outline
                onClick={this.handleClickComment}
              >
                <IconWithNoClick
                  className={
                    comment.username === this.props.localUser
                      ? "far fa-trash-alt"
                      : "far fa-heart"
                  }
                />
              </Button>
            </div>
          ))}
          <small className="text-muted pl-2">
            {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
          </small>
        </div>
        <Form onSubmit={this.addNewComment}>
          <InputGroup>
            <Input
              className="m-0 h-100 border-0 p-3"
              placeholder="Add a comment..."
              value={this.state.addText}
              onChange={this.handleChanges}
              name="addText"
            />
            <InputGroupAddon addonType="append">
              <Button outline className="border-0" type="button">
                <i className="fas fa-ellipsis-h fa-lg" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </CardBody>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  timestamp: PropTypes.string,
  likes: PropTypes.number
};

export default CommentSection;
