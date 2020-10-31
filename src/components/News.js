import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
height: 200px;
width:100%;
border:red solid 2px;
margin: 50px 0;
`
const Title = styled.h1`

`
const Description = styled.p`
font-size:15px;
`

const News = ({ title, description }) => <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
</Wrapper>

export default News;