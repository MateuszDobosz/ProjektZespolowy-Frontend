import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:200px;
height:300px;
background-color: red;
margin:10px;
`

const Animal = ({ id, age, description, title, imageUrl, category }) => (<Wrapper>
    <p>{id}</p>
    <p>{age}</p>
    <p>{description}</p>
    <p>{title}</p>
    <p>{category}</p>

</Wrapper>);


export default Animal;