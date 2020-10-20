import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { ReactComponent as HelloIcon } from "../assets/HelloIcon.svg";
import axios from "axios";
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

const LoginPage = () => {
  const responseGoogle = (response) => {
    axios
      .post("http://176.107.131.27:5000/auth/google", {
        token: response.tokenId,
      })
      .then((res) => console.log(res));
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
      <p>Witaj</p>
      <HelloIcon />
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
    </Wrapper>
  );
};

export default LoginPage;
