import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
position:relative;
  display: flex;
  background: url(${({ img }) => img});
  background-size: cover;
  width:200px;
  height:200px;
  border:solid 5px #0d9e47;
  p{
    position:absolute;
    color:white;
    bottom:10px;
    left:10px;
  }

`;



const AnimalCard = ({ name,img }) => (
  <Wrapper img={img}>
    {/* <img src={img} alt="Dog" /> */}
    <p>{name}</p>
  </Wrapper>
);

export default AnimalCard;
