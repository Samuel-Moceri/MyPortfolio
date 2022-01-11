import React from 'react';
import styled from 'styled-components';
import BigTitlte from '../SubComponents/BigTitle';
import HomeButton from '../SubComponents/HomeButton';
import LogoComponent from '../SubComponents/LogoComponent';
import SocialIcons from '../SubComponents/SocialIcons';

import { mediaQueries } from './Themes'


const MainContainer = styled.div`
${'' /* background-image: url(${img}); */}
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vw;
height: 100vh;
`

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 50%;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    ${'' /* left: calc(5rem + 5vw); */}
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;

    ${mediaQueries(40)`
        width: 60vw;
        height: 50%;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
    `};

    ${mediaQueries(30)`
        top: 55%;
        width: 45vw;
        height: 55vh;
        ${'' /* backdrop-filter: none; */}
        margin-top:1rem;
    `};

    ${mediaQueries(20)`
        top: 65%;
        width: 45vw;
        height: 62vh;
        padding: 1rem;
        font-size: calc(0.5rem + 1vw);
    `};
`


//---- .box class ------ //
const DivBox = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: center;
    padding: 40px;
    ${'' /* background: #fff; */}
    ${'' /* border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */}

    ${mediaQueries(40)`
        width: 60vw;
        height: 50vh;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
    `};

    ${mediaQueries(30)`
        top: 50%;
        width: 50vw;
        height: 55vh;
        ${'' /* backdrop-filter: none; */}
        margin-top:2rem;
    `};

    ${mediaQueries(20)`
        top: 40%;
        padding: 1rem;
        font-size: calc(0.5rem + 1vw);
    `};
`

const EmailArea = styled.input.attrs({ 
    type: 'email',
})`
  width: 100%;

`

const NameArea = styled.input.attrs({ 
    type: 'name',
})`
  width: 100%;
`

const TextArea = styled.textarea.attrs({ 
    type: 'text',
})`
  width: 100%;
  height: 10rem;
  resize: none;
`

const Input = styled.input.attrs({ 
    type: 'submit',
    value: 'Envoyer',
  })`
    background: #5584AC;
    color: #fff;
    cursor: pointer;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
    &:active {
      background-color: #f1ac15;
    }
  `

const ContactPage = () => {
    
    return (
        <MainContainer>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <HomeButton theme='light' />
                {/* <HomeButton /> */}
                <Main>
                    <DivBox action="https://formsubmit.co/moceri.samuel@gmail.com" method="POST" >
                        <h3>Contactez moi</h3>
                        <div className="form-label-group">
                            <label htmlFor="inputEmail">Adresse mail</label>
                            <br/>
                            <EmailArea type="email" name="email" id="inputEmail" placeholder="Saisissez adresse mail..." aria-label="Votre email" required />
                        
                            <label htmlFor="inputName">Nom et Prénom</label>
                            <br/>
                            <NameArea type="text" name="name" id="inputName" placeholder="Saisissez votre nom et prénom..." aria-label="Votre Nom et Prénom" required />
                        
                            <label htmlFor="inputText">Votre Message</label>
                            <br/>
                            <TextArea type="text"  name="text" id="inputText" placeholder="Saisissez votre message..." aria-label="Votre message" required />
                        </div>

                        <Input aria-label="Envoyer" />
                    </DivBox>
                </Main>
            </Box>
            <BigTitlte text='CONTACT' top="5rem" left="5rem"/>
        </MainContainer>
    )
};


export default ContactPage;
