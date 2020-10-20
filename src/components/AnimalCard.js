import React from "react";
import styled from "styled-components";
import Img from "../assets/piesek.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnimalCard = ({ name }) => (
  <Wrapper>
    <img src={Img} alt="Dog" />
    <p>{name}</p>
  </Wrapper>
);

export default AnimalCard;
