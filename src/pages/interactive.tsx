import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps } from "react-router-dom";
import KineticTypographyApp1 from "../interactive/kineticTypography1/kineticTypographyApp1.js";
import InteractivePageStyle from '../assets/styles/interactive';

const InteractivePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)

        let number = props.match.params.number;

        switch (number) {
            case '1':
                const app = new KineticTypographyApp1();
                break;
            default:
                console.log('none');
                break;
        }
    }, [props])

    return <InteractivePageStyle />
}

export default InteractivePage;