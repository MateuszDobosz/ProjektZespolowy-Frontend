import React from "react";
import styled from "styled-components";
import Img from "../assets/Group 12.png";

import AnimalCard from "../components/AnimalCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledText = styled.p`
  font-size: 2.2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1140px;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MainImg = styled.div`
  width: 100vw;
  min-height: 550px;
  background: url("${Img}") center no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    position: fixed;
    top: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;
const HomePage = () => (
  <Wrapper>
    <MainImg />
    <StyledText>Szukają domu:</StyledText>
    <CardWrapper>
      <AnimalCard name="Tofik" />
      <AnimalCard name="Tofik" />
      <AnimalCard name="Tofik" />
      <AnimalCard name="Tofik" />
    </CardWrapper>
  </Wrapper>
);

export default HomePage;
