import React from "react";
import styled from "styled-components";
import Img from "../assets/Group 10.svg";
import AnimalCard from "../components/AnimalCard";

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

const StyledText = styled.p`
  font-size: 2.2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1440px;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 0;
`;
const HomePage = () => (
  <Wrapper>
    <MainImg src={Img} alt="Dog" />
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
