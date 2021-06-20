import React, { useState, useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps, useHistory } from "react-router-dom";
import KineticTypographyApp2 from "../interactive/kineticTypography2/kineticTypographyApp2.js";
import KineticTypographyApp3 from "../interactive/kineticTypography3/kineticTypographyApp3.js";
import KineticTypographyApp4 from "../interactive/kineticTypography4/kineticTypographyApp4.js";
import KineticTypographyApp6 from "../interactive/kineticTypography6/kineticTypographyApp6.js";
import InteractivePageStyle from '../assets/styles/interactive';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`
const InteractivePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [canvasApp, setCanvasApp] = useState<Object>({});
    const history = useHistory();
    
    useEffect(() => {
        logging.info(`Loading ${props.name}`)

        let number = props.match.params.number;

        switch (number) {
            case '1002':
                setCanvasApp(new KineticTypographyApp2());
                break;
            case '1003':
                setCanvasApp(new KineticTypographyApp3());
                break;
            case '1004':
                setCanvasApp(new KineticTypographyApp4());
                break;
            case '1006':
                setCanvasApp(new KineticTypographyApp6());
                break;
            default:
                console.log('none');
                setCanvasApp({});
                break;
            }
        // return () => {
        //     logging.info(`Cleaned up ${props.name}`)
        //     setCanvasApp({});
        // }
    }, [props])

    useEffect(() => {
        return () => {
            logging.info(`Cleaned up ${props.name}`)
            let app = document.getElementById("app");
        }
    }, []);

    return <canvas id="interactiveCanvas" />
}

export default InteractivePage;