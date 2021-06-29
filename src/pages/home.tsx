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
    margin-top: 40vh;
    height: 3000px;
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

const BackgroundText = styled.div`
    margin-top: 10vh;
    font-weight: bold;
    font-size: 15vh;
    line-height: 12vh;
    color: #0f0f0f;
    width: 30%;
`

const StyledLink = styled(Link)<StyledLinkProps>`
    text-decoration: none !important;
    margin-left: 100px;
    font-family: "Hind"
    font-weight: bold;
    font-size: 10vh;
    line-height: 12vh;
    color: #0f0f0f;
    animation: animate__bounceInDown;
`

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        new LogoApp('.sticker');
    }, [props.name])

    return (
        <HomeWrapper>
            <Navbar />
            <BackgroundText>Hi. I'm Mooyeon</BackgroundText>
            <StyledLink animation="bounceInDown" to="/about">About</StyledLink><br/>
            <StyledLink to="/interactive/1001">Projects</StyledLink><br/>
        </HomeWrapper>
    );
}

export default HomePage;