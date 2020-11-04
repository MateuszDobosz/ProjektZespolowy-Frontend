import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  flex-grow: 1;
  align-items: center;
  background: url(${({ img }) => img});
  background-size: cover;
  -webkit-box-shadow: -4px 5px 15px -1px rgba(0, 0, 0, 0.39);
  box-shadow: -4px 5px 15px -1px rgba(0, 0, 0, 0.39);
`;

const Name = styled.p`
  font-size: 35px;
  font-weight: 700;
  color: white;
  padding: 10px 25px;
  -webkit-text-stroke: 1px black;
  align-self: flex-start;
`;
const Animal = ({ title, imageUrl, category }) => (
  <Wrapper img={imageUrl}>
    <Name>{title}</Name>
    <Button>Adoptuj</Button>
  </Wrapper>
);

export default Animal;
