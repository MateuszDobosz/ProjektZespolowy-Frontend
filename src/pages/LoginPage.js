import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { ReactComponent as HelloIcon } from "../assets/HelloIcon.svg";
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
  const responseGoogle = (response) => console.log(response);

  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <Wrapper>
      <HelloIcon />
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Zaloguj się z google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        disabled={false}
      />
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Zaloguj sie z facebook"
      />
    </Wrapper>
  );
};

export default LoginPage;
