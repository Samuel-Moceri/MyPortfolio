import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import { darkTheme, mediaQueries } from './Themes'
import rocketPic from "../assets/Images/Rocket.png";
import Loading from '../SubComponents/Loading';
//Components
const SocialIcons = lazy(() => import('../SubComponents/SocialIcons'))
const HomeButton = lazy(() => import('../SubComponents/HomeButton'))
const LogoComponent = lazy(() => import('../SubComponents/LogoComponent'))
const ParticlesComponent = lazy(() =>
  import('../SubComponents/ParticlesComponent')
)
const BigTitle = lazy(() => import('../SubComponents/BigTitle'))

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px)}
`

const Rocket = styled(motion.div)`
position: absolute;
top: 25%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
-webkit-user-select: none; 


img{
    width:100%;
    height: auto;
}
`

const Main = styled(motion.div)`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;

    ${mediaQueries(40)`
        width: 60vw;
        height: 50vh;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    `};

    ${mediaQueries(30)`
        width: 50vw;
        height: auto;
        backdrop-filter: none;
        margin-top:2rem;
    `};

    ${mediaQueries(20)`
        padding: 1rem;
        font-size: calc(0.5rem + 1vw);
    `};
`

const AboutPage = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <Suspense fallback={<Loading/>}>
                <Box>
                
                    <LogoComponent theme='dark' />
                    <SocialIcons theme='dark' />
                    <HomeButton />
                    <ParticlesComponent theme='dark' />

                    <Rocket
                    initial={{ left: '-10%', top: '100%' }}
                    animate={{
                    left: '70%',
                    top: '20%',
                    transition: { duration: 2, delay: 0.5 },
                    }}
                    >
                        <img src={rocketPic} alt="Rocket"/>
                    </Rocket>

                    <Main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
                    >
                        Je suis un web développeur front-end habitant quelque part en France. Je suis nouveau dans ce nouveau monde mais prêt à créer des sites interactifs et avec des styles selon vos besoins.
                        <br /> <br/>
                        Je suis très curieux et j'aime découvrir de nouveaux univers, vos univers ! 
                        <br /> <br/>
                        Soucieux de m’améliorer constamment, j’ai une bonne capacité d’adaptation ainsi que le sens des responsabilités, de l’organisation et de la rigueur. 
                    </Main>         

                    <BigTitle text='A PROPOS DE MOI' top="10%" left="5%"/>

                </Box>
            </Suspense>
        </ThemeProvider>
    )
};


export default AboutPage;
