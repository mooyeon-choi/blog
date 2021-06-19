import React, { useEffect } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";

const AboutPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loding ${props.name}`);
    }, [props.name])

    return <div>This is the ABOUT page!</div>
}

export default AboutPage;