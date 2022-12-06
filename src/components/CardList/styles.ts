import Styled from 'styled-components';

export const Container = Styled.div`
    border: 1px solid #999;
    border-radius: 5px;

    width: 100%;
    padding: 2rem; 

    display: flex;
    margin: 1rem 0;

    img {
        max-width: 100%;
    }
`;

export const CharacterDesc= Styled.div`
    padding-left: 2rem;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    flex: 2;

    h2 {
        font-size: 1.5rem;
        color: #333;
    }

    h3{
        font-size: 1rem;
        font-weight: 400;
        color: #333;
        margin-top: 1rem;
    }
`;

export const CharacterButtons = Styled.div`
    display: flex;
    margin-top: 2rem;

    a {
        color: #fff;
        background: #f00;
        text-decoration: none;

        padding: 0.5rem 3rem;
        margin-right: 1rem;
    }

    a:hover {
        background: #500;
    }
`;