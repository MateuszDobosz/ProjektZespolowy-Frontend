import React,{useState} from "react";
import styled from "styled-components";
import StyledLink from "../components/Link";
import LogoIcon from "../assets/Group.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu'
import { logOut } from "../actions/userActions";

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
  flex-wrap: wrap;

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
const BurgerWrapper = styled.div`
@media (min-width: 768px) {
    display: none;
  }
`

const ListItem = styled.li``;

const Menu = () => {
  const loggedIn = useSelector((state) => state.userReducer.loggedIn);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const Logout = () => dispatch(logOut());
  const [nav, setNav] = useState(false);


    const handleNavbar = () => {
        setNav(!nav);
    }


  return (
    <NavWrapper>
      <BeltWrapper>
        <Link to="/">
          <img src={LogoIcon} alt="Logo" />
        </Link>
        <Wrapper>
          <ListItem>
            {user.isAdmin ? (
              <StyledLink to="/admin" activeClassName="active1">
                Panel admina
              </StyledLink>
            ) : null}
            <StyledLink to="/news" activeClassName="active1">
              Aktualności
            </StyledLink>
            <StyledLink to="/survey" activeClassName="active1">
              Ankieta przedadopcyjna
            </StyledLink>
          </ListItem>
          {/* <ListItem>
            <StyledLink to="/walk" activeClassName="active1">
              Umów się na spacer
            </StyledLink>
          </ListItem> */}
          <ListItem>
            <StyledLink to="/donations" activeClassName="active1">
              Wesprzyj nas
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/animals" activeClassName="active1">
              Nasi podopieczni
            </StyledLink>
          </ListItem>
          <ListItem>
            {loggedIn ? (
              <StyledLink
                to="/"
                onClick={() => {
                  Logout();
                }}
              >
                Wyloguj
              </StyledLink>
            ) : (
                <StyledLink to="/login" activeClassName="active1">
                  Dołącz do nas
                </StyledLink>
              )}
          </ListItem>
        </Wrapper>
        <BurgerWrapper>
                <BurgerMenu handleNavbar={handleNavbar} navbarState={nav} />
                {nav ? <CollapseMenu handleNavbar={handleNavbar} /> : null}
            </BurgerWrapper>
      </BeltWrapper>
    </NavWrapper>
  );
};

export default Menu;
