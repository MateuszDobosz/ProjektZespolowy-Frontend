import React from 'react';
import styled from 'styled-components';


const BurgerIcon = styled.button`
padding:10px;
cursor:pointer;
border:none;
background-color: transparent;
outline:none;
`
const BurgerBox = styled.span`
width:36px;
height:30px;
display:inline-block;
position:relative;
`

const BurgerInner = styled.span`
width:100%;
height:3px;
background-color: black;
position:absolute;
left:0;
top:50%;
transform: translateY(-50%);
transition: all .3s ease-in-out;
&.open{
    background-color:transparent;
}
::before {
    content: '';
    width:50%;
height:3px;
background-color: black;
transition: all .3s ease-in-out;
position:absolute;
left:0;
top:-10px;
} 
&.open::before{
    transform:translateY(10px) rotate(45deg);
    width:100%;
}
::after {
    content: '';
    width:50%;
height:3px;
background-color: black;
position:absolute;
right:0;
top:10px;
transition: all .3s ease-in-out;
}
&.open::after{
    transform:translateY(-10px) rotate(-45deg);
    width:100%;
}
`


const BurgerMenu = ({ handleNavbar, navbarState }) => {


    return (
        <BurgerIcon onClick={handleNavbar}>
            <BurgerBox>
                <BurgerInner className={navbarState ? 'open' : null}></BurgerInner>
            </BurgerBox>
        </BurgerIcon>);
}

export default BurgerMenu;