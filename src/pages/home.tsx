import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';
import MainCanvasApp from "../interactive/homePage/mainCanvasApp.js";
import styled from 'styled-components';

const MainCanvas = styled.canvas`
    position: fixed;
    top: 0;
    z-index: -1;
`

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
        new MainCanvasApp();

        return () => {
            const mainCanvas = document.getElementById("mainCanvas");
            mainCanvas?.remove()
        }
    }, [props.name])

    return (
        <div>
            <div>Hello!</div>
            <Link to="/about">About Page</Link><br/>
            <Link to="/interactive/1001">Kinetic Typography 1</Link><br/>
            <Link to="/interactive/1002">Kinetic Typography 2</Link><br/>
            <Link to="/interactive/1003">Kinetic Typography 3</Link><br/>
            <Link to="/interactive/1004">Kinetic Typography 4</Link><br/>
            <Link to="/interactive/1006">Kinetic Typography 6</Link><br/>
            <MainCanvas id="mainCanvas" />
        </div>
    );
}

export default HomePage;