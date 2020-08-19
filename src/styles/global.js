import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body {
        background: ${props => props.theme.colors.background};
        box-sizing: border-box;
        font-family: sans-serif;

    }
`
