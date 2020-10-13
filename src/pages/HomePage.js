import React from "react";
import styled from "styled-components";
import Img from "../assets/Group 10.svg";

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MainImg = styled.img`
  width: 1440px;
`;
const HomePage = () => (
  <Wrapper>
    <MainImg src={Img} alt="Dog" />
  </Wrapper>
);

export default HomePage;
