import React from "react";
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
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: 0,
      addText: "",
      clickedLikes: false
    };
  }
  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    });
  }
  addNewComment = (event, index) => {
    event.preventDefault();
    const newData = [
      ...this.state.comments,
      { username: "I made something up", text: this.state.addText }
    ];
    this.setState({ comments: newData, addText: "" });
  };
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
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
  render() {
    return (
      <CardBody className="px-0 pt-3 pb-0 mx-3 my-0">
        <div className="likes">
          <button className="grey-button" onClick={this.handleLikes}>
            <i
              className={
                !this.state.clickedLikes
                  ? "far fa-heart fa-lg pr-2"
                  : "fas fa-heart fa-lg pr-2 red-heart"
              }
            />
          </button>
          <button className="grey-button">
            <i className="far fa-comment fa-lg" />
          </button>

          <p>
            <strong>{this.state.likes} likes</strong>
          </p>
        </div>
        <div className="border-bottom pb-3">
          {this.state.comments.map(comment => (
            <p key={comment.text} className="mb-2">
              <strong>{comment.username} </strong>
              {comment.text}
            </p>
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
              <Button className="btn" type="button" color="link">
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
