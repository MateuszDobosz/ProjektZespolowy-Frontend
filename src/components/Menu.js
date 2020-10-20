import React from "react";
import styled from "styled-components";
import StyledLink from "../components/Link";
import LogoIcon from "../assets/Group.svg";

const NavWrapper = styled.div`
  background-color: #0d9e47;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  height: 50px;
  max-width: 1140px;

  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
const BeltWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  padding: 10px;
`;

const ListItem = styled.li``;

const Menu = () => (
  <NavWrapper>
    <BeltWrapper>
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
          <StyledLink to="/login" activeClassName="active1">
            Dołącz do nas
          </StyledLink>
        </ListItem>
      </Wrapper>
    </BeltWrapper>
  </NavWrapper>
);

export default Menu;
