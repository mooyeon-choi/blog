import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const InteractivePageStyle = createGlobalStyle`
  ${normalize}

    * {
        outline: 0;
        margin: 0;
        padding: 0;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }
`;

export default InteractivePageStyle;