import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name])

    return (
        <div>
            <div>Hello!</div>
            <Link to="/about">About Page</Link>
            <br/>
            <Link to="/interactive/1">Kinetic Typography 1</Link>
        </div>
    );
}

export default HomePage;