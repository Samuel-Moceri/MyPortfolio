import { motion } from "framer-motion";
import { useEffect, useRef, lazy, Suspense } from "react";

import styled, { ThemeProvider } from "styled-components";

import { Logo } from "./AllSvgs";
import { Work } from "./WorkData";
import { darkTheme, mediaQueries } from "./Themes";

import Card from "../SubComponents/Card";
import Loading from "../SubComponents/Loading";

const SocialIcons = lazy(() => import("../SubComponents/SocialIcons"));
const HomeButton = lazy(() => import("../SubComponents/HomeButton"));
const LogoComponent = lazy(() => import("../SubComponents/LogoComponent"));
const BigTitle = lazy(() => import("../SubComponents/BigTitle"));


const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  height: 225vh;

  ${mediaQueries(50)`
    height: 225vh;
  `};

  ${mediaQueries(40)`
    height: 275vh;
  `};

  ${mediaQueries(25)`
    height: 400vh;
  `};
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);

  height: 40vh;
  /* height:200vh; */
  //border:1px solid white;

  display: flex;

  ${mediaQueries(50)`
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
    top: 30%;
    left:calc(6rem + 15vw);
  `};

  ${mediaQueries(40)`
    left:calc(2rem + 15vw);
  `};

  ${mediaQueries(25)`
    left:calc(1rem + 15vw);
  `};
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;

  z-index: 1;
  ${mediaQueries(40)`
     width:60px;
         height:60px;   
       svg{
         width:60px;
         height:60px;
       }

  `};
  ${mediaQueries(25)`
        width:50px;
         height:50px;
        svg{
         width:50px;
         height:50px;
       }

  `};
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {

    const ref = useRef(null);
    const logo = useRef(null);

    useEffect(() => {
        let element = ref.current;
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
         
          return (logo.current.style.transform = 'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)

        return () => {
          window.removeEventListener('scroll', rotate); 
        }
      }, [])


    return (
        <ThemeProvider theme={darkTheme}>
          <Suspense fallback={<Loading />}>
            <Box
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
              <LogoComponent theme='dark'/>
              <HomeButton />
              <SocialIcons theme='dark'/>

                  <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
                      {
                          Work.map( d => 
                          <Card key={d.id} data={d} />
                          )
                      }
                  </Main>

              <BigTitle text="PROJETS" top='10%' right="20%"/>
                  
              <Rotate ref={logo}>
                  <Logo width={80} height={80} fill={darkTheme.text} />
              </Rotate>
            </Box>
          </Suspense>
        </ThemeProvider>
    );
};

export default WorkPage