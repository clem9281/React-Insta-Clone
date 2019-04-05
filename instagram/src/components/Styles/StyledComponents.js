import styled from "styled-components";
import { Input, NavbarBrand } from "reactstrap";

//styled componenets required by MVP
////SearchBar
export const Header = styled.header`
  margin: 0;
`;

// need important to override bootstrap styles
export const LogoHeader = styled(NavbarBrand)`
  height: 40px;
  width: auto;
  display: flex !important;
  align-items: center;
`;

////PostContainer
export const UserThumbnail = styled.img`
  max-height: 80px;
  border-radius: 50%;
  padding: 1.5rem 0;
  margin: 0 0.5rem 0 1.5rem;
`;

export const Username = styled.p`
  display: inline;
  font-weight: bold;
  margin: 0;
`;
// styled components for SearchBar

export const StyledNavIcon = styled.i`
  border-right: 2px solid black;
  @media (max-width: 768px) {
    border: none;
  }
`;
export const StyledNavInput = styled(Input)`
  text-align: center;
  &::placeholder {
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
  }
`;

//styled components for CommentSection
export const StyledReactionButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-right: 0.5rem;
`;
export const IconWithNoClick = styled.i`
  pointer-events: none;
`;
export const FullHeart = styled.i`
  color: red;
`;

// styled components for Login
export const LoginLogo = styled.img`
  max-height: 40px;
  display: block;
  margin: 0 auto;
`;
