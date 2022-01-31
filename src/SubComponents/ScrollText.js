//Home Button
import React from 'react';
import styled from 'styled-components';

const TextScroll = styled.span`
color: ${(props) => props.theme.text};
position: fixed;
right: 10%;
bottom: 5%;
transform: translate(-50%,0);
`

const ScrollText = () => {
    return (
        <TextScroll>Scrollez</TextScroll>
    )
}

export default ScrollText ;
