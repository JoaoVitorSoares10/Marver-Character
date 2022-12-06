import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 98.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
        @media(max-width: 480px){
            font-size: 76.5%;
        }
        @media(max-width: 420px){
            font-size: 66%;
        }
        @media(max-width: 360px){
            font-size: 55%;
        }
    }

    .alert {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        background: #000;
        color: #ddd;
        border-bottom: 1px solid #500;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #555;
    }
`;