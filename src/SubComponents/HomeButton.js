//Home Button
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeBtn } from '../components/AllSvgs';

const Home = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%,0);

color: #5584AC;
${'' /* background-color: transparent; */}
background-color: #F4EEE8;
padding: 0.3rem;
border-radius: 50%;
border: none;
${'' /* border: 1px solid #000; */}
width: 2.5rem;
height: 2.5rem;

display: flex;
flex-direction: column;
padding-bottom: 2px;
${'' /* justify-content: center; */}
align-items: center;
z-index: 3;

cursor: pointer;

&:hover{
    background-color: rgb(244, 238, 232);
    box-shadow: 0 0 8px 6px rgb(85, 132, 172);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const HomeText = styled.span`
color: ${(props) => props.theme.text};
position: fixed;
top: 2.25rem;
left: 50%;
transform: translate(-50%,0);
`

const HomeButton = () => {
    return (
        <Home>
            <NavLink to="/">
                <HomeBtn width={30} height={30} fill='currentColor' /> 
            </NavLink>
            <HomeText>Accueil</HomeText>
        </Home>
    )
}

export default HomeButton ;
