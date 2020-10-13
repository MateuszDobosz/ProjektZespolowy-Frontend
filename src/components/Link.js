import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: white;
  font-weight: 500;
  padding: 20px;
  text-decoration: none;

  &.active1 {
    text-decoration: underline;
  }
`;

export default StyledLink;
