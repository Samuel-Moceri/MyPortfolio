import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github, Instagram, YouTube, Linkedin } from '../components/AllSvgs';
import { darkTheme}  from '../components/Themes';

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
return (
  <Icons>
    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1}} 
    >
        <NavLink style={{color:'inherit'}} target="_blank" rel="noopener noreferrer" to={{pathname:"https://github.com/samuel-moceri"}}>
            <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </NavLink>
    </motion.div>

    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.4}}
    >
        <NavLink style={{color:'inherit'}} target="_blank" rel="noopener noreferrer" to={{pathname:"https://youtu.be/X7Indy4FB_o?t=2426"}}>
            <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </NavLink>
    </motion.div>

    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.2}}
    >
        <NavLink style={{color:'inherit'}} target="_blank" rel="noopener noreferrer" to={{pathname:"https://www.instagram.com/samuel_moceri/"}}>
            <Instagram width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </NavLink>
    </motion.div>

    <motion.div
    initial={{transform:"scale(0)"}}
    animate={{scale:[0,1,1.5,1]}}
    transition={{type:'spring', duration:1, delay:1.4}}
    >
        <NavLink style={{color:'inherit'}} target="_blank" rel="noopener noreferrer" to={{pathname:"https://www.linkedin.com/in/samuel-moceri-5a573b67/"}}>
            <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body } />
        </NavLink>
    </motion.div>


    <Line color={props.theme}
        initial= {{
            height:0
        }}
        animate={{
            height:'8rem'
        }}
        transition={{
            type:'spring', duration:1 , delay:0.8
        }}
        
    />
  </Icons>
)
};

export default SocialIcons ;
