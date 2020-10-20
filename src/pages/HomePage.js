import React from "react";
import styled from "styled-components";

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
const HomePage = () => (
  <Wrapper>
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
