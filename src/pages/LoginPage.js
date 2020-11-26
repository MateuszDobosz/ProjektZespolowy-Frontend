import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ReactComponent as HelloIcon } from "../assets/HelloIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserGoogle, fetchUserFacebook } from "../actions/userActions";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Redirect, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 350px;
  min-height: 500px;
  background-color: #0d9e47;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-evenly;
  align-items: center;
`;

const SocialButton = styled.button`
  border: none;
  width: 220px;
  height: 50px;
  background-color: ${({ facebook }) => (facebook ? "#395185" : "#ea4335")};
  border-radius: 50px;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LogoutButton = styled.button`
  border: none;
  width: 220px;
  height: 50px;
  background-color: #050505;
  border-radius: 50px;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LoginPage = () => {
  const loggedIn = useSelector((state) => state.userReducer.loggedIn);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
  const LoginGoogle = (data) => dispatch(fetchUserGoogle(data));
  const LoginFacebook = (data) => dispatch(fetchUserFacebook(data));

  const responseGoogle = (response) => {
    LoginGoogle(response.tokenId);
  };

  const responseFacebook = (response) => {
    LoginFacebook(response.accessToken);
  };

  const { state } = useLocation();

  if (loggedIn === true) {
    return <Redirect to={state?.from || '/'} />
  }
  return (
    <Wrapper>
      <HelloIcon />
      {loggedIn ? (
        <p>Zalogowany jako {user.name}</p>
      ) : (
          <ButtonWrapper>
            <GoogleLogin
              clientId="299847310816-vc55jckp0jqbioah4fv37vcv4pn9oiuh.apps.googleusercontent.com"
              buttonText="Zaloguj się z google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              autoLoad={false}
              render={(renderProps) => (
                <SocialButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FaGoogle />
                Zaloguj z Google
                </SocialButton>
              )}
              cookiePolicy={"single_host_origin"}
              disabled={false}
            />
            <FacebookLogin
              appId="652089999027908"
              autoLoad={false}
              callback={responseFacebook}
              render={(renderProps) => (
                <SocialButton facebook onClick={renderProps.onClick}>
                  <FaFacebookF />
                Zaloguj z Facebook
                </SocialButton>
              )}
            />
          </ButtonWrapper>
        )}

      {loggedIn ? (
        <LogoutButton
          onClick={() => {
            
            dispatch({ type: "LOG_OUT" });
          }}
        >
          Wyloguj{" "}
        </LogoutButton>
      ) : null}
    </Wrapper>
  );
};

export default LoginPage;
