import React from "react";
import styled from "styled-components";
import StyledLink from "../components/Link";
import LogoIcon from "../assets/Group.svg";

const NavWrapper = styled.nav`
  background-color: #5dc6df;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  height: 60px;
  max-width: 1140px;

  justify-content: flex-end;
  align-items: center;
`;

const ListItem = styled.li``;

const Menu = () => (
  <NavWrapper>
    <img src={LogoIcon} alt="Logo" />
    <Wrapper>
      <ListItem>
        <StyledLink to="/donates" activeClassName="active1">
          Wesprzyj nas
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/walk" activeClassName="active1">
          Umów się na spacer
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/animals" activeClassName="active1">
          Nasi podopieczni
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/register" activeClassName="active1">
          Utwórz konto
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/login" activeClassName="active1">
          Zaloguj się{" "}
        </StyledLink>
      </ListItem>
    </Wrapper>
  </NavWrapper>
);

export default Menu;
