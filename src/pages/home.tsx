import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/common/navbar';
import { LogoApp } from '../utils/stickerLogo/logoApp.js';

interface StyledLinkProps {
    animation?: string;
}

const HomeWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #000000;
`

const BackgroundDiv = styled.div`
    height: 90vh;
    width: 70%;
    margin: 50px;
    background-color: #2B5F8C;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const BackgroundText = styled.p`
    margin-left: -40px;
    overflow: hidden;
    font-weight: bold;
    font-size: 15vh;
    line-height: 14vh;
    color: #0a0a0a;
    width: 700vh;
    z-index: -1;

    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`

const StyledLink = styled(Link)<StyledLinkProps>`
    text-decoration: none;
    font-weight: bold;
    font-size: 15vh;
    line-height: 1;
    color: #0f0f0f;

    :hover {
        color: #c6e2ff;
        animation: neon .08s ease-in-out infinite alternate;
    }
`

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        new LogoApp('.sticker');
    }, [props.name])

    return (
        <HomeWrapper>
            <BackgroundText>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</BackgroundText>
            <BackgroundText>E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D</BackgroundText>
            <BackgroundText>J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I</BackgroundText>
            <BackgroundText>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</BackgroundText>
            <BackgroundText>E F <StyledLink to="/interactive/1001">P R O J E C T</StyledLink> G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W</BackgroundText>
            <BackgroundText>J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I</BackgroundText>
            <BackgroundText>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</BackgroundText>
            <BackgroundText>E F G H I J K L M N O P Q R S T U V W X Y Z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z A B C D</BackgroundText>
            <StyledLink animation="bounceInDown" to="/about">About</StyledLink><br/>
            
        </HomeWrapper>
    );
}

export default HomePage;