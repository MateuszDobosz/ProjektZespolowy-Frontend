import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import StyledLink from "../components/Link";


const Wrapper = styled.nav`
    display:flex;
    flex-direction:column;
    position:fixed;
    right:0;
    background-color: #0d9e47;
    z-index:10;
`

const List = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    list-style:none;

`
const ListItem = styled.li`
margin:20px 10px;
flex-basis:100%;
`

const CollapseMenu = ({handleNavbar}) => {

    const loggedIn = useSelector((state) => state.userReducer.loggedIn);
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <List>
            
            {user.isAdmin ? (
                <ListItem>
              <StyledLink to="/admin" activeClassName="active1" onClick={handleNavbar}>
                Panel admina
              </StyledLink>
              </ListItem>
            ) : null}
            
<ListItem><StyledLink to="/news" activeClassName="active1" onClick={handleNavbar}>
              Aktualności
            </StyledLink></ListItem>
             <ListItem>
            <StyledLink to="/survey" activeClassName="active1" onClick={handleNavbar}>
              Ankieta przedadopcyjna
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/donations" activeClassName="active1" onClick={handleNavbar}>
              Wesprzyj nas
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/animals" activeClassName="active1" onClick={handleNavbar}>
              Nasi podopieczni
            </StyledLink>
          </ListItem>
          <ListItem>
            {loggedIn ? (
              <StyledLink
                to="/"
                onClick={() => {
                  dispatch({ type: "LOG_OUT" });
                  handleNavbar();
                }}
              >
                Wyloguj
              </StyledLink>
            ) : (
                <StyledLink to="/login" activeClassName="active1" onClick={handleNavbar}>
                  Dołącz do nas
                </StyledLink>
              )}
          </ListItem>
            </List>
        </Wrapper>
    )
}


export default CollapseMenu;