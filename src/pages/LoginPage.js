import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { ReactComponent as HelloIcon } from "../assets/HelloIcon.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserGoogle } from "../actions/userActions";
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
`;

const LoginPage = () => {
  const loggedIn = useSelector((state) => state.userReducer.loggedIn);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
  const LoginGoogle = (data) => dispatch(fetchUserGoogle(data));

  const responseGoogle = (response) => {
    LoginGoogle(response.tokenId);
  };

  const responseFacebook = (response) => {
    axios
      .post("http://176.107.131.27:5000/auth/facebook", {
        token: response.accessToken,
      })
      .then((res) => console.log(res));
    console.log(response);
  };
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
            cookiePolicy={"single_host_origin"}
            disabled={false}
          />
          <FacebookLogin
            appId="652089999027908"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            textButton="Zaloguj sie z facebook"
          />
        </ButtonWrapper>
      )}

      {loggedIn ? (
        <button
          onClick={() => {
            console.log(user);
            dispatch({ type: "LOG_OUT" });
          }}
        >
          Wyloguj{" "}
        </button>
      ) : null}
    </Wrapper>
  );
};

export default LoginPage;
