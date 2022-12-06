import Styled from 'styled-components';

export const Container = Styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-top: 2rem;

    input {
        width: 26rem;
        height: 3rem;

        outline: none;

        border: 1px solid #ccc;
        padding: 1rem;

        font-size: 1rem;
    }

    button {
        background: #f00;
        color: #fff;
        width: 5rem;
        border: 1px solid  #f00;

        transition: all 0.5s;

        &:hover{
            background: #fff;
            color: #f00;
        }
    }
`;

export const CharactersList = Styled.div`
    display: flex;
    flex-direction: column;

    max-width: 1000px;

    margin: 3rem auto;
    padding: 0 2rem;

    p {
        text-align: center;
    }
`