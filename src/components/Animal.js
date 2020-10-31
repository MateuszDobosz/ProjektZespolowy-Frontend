import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:200px;
height:300px;
background-color: red;
margin:10px;
padding:10px;
flex-grow:1;
justify-content:center;
align-items:center;
`
const Image = styled.img`
width:100px;
margin:5px;
`

const Animal = ({ age, description, title, imageUrl, category }) => (<Wrapper>
    <Image src={imageUrl} alt="Pet" />
    <p>{title}</p>
    <p>{category}</p>
    <p>{age}</p>
    <p>{description}</p>

</Wrapper>);


export default Animal;