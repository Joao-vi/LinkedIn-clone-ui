import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing:border-box;
    }

    html {
        font-size:62.5%;  // -- 1rem  =  10px 
    }

    body {
        font-family: 'Roboto',sans-serif;
        background-color: var(--bg-color); 
        height: 100vh;
    }

    input,textarea,button {
        font-family: 'Roboto',sans-serif;

    }
    li {
        list-style: none;
    }
    :root {
        --bg-color : hsl(45deg 14% 95%);
        --painel-color: hsl(0deg 0% 100%);
        --black-color: hsl(0deg 0% 10%);
        --gray-color : hsl(0deg 0% 40%);
        --blue-color: hsl(210deg 90% 40%);
    }
`;
