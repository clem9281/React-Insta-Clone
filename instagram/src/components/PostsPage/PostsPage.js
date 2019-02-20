import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import { Container } from "reactstrap";

const PostsPage = ({
  foundUser,
  data,
  onSearch,
  changeFunction,
  textValue,
  localUser,
  logout
}) => {
  return (
    <>
      <SearchBar
        onSearch={onSearch}
        changeFunction={changeFunction}
        textValue={textValue}
        logout={logout}
      />
      <Container>
        <p
          className={foundUser ? "bad-search-area text-center" : "text-center"}
        >
          Sorry, we couldn't find any posts by that username, but check out
          these recent posts
        </p>
        {data.map(element => (
          <PostContainer
            data={element}
            key={element.username}
            localUser={localUser}
          />
        ))}
      </Container>
    </>
  );
};

export default PostsPage;
