import styled from 'styled-components'


export const Header = styled.header`
    margin-bottom: 40px;
    background-color: #eee;
    padding: 16px;

    h1 {
        margin-bottom: 24px;
        font-weight: 100;
    } 
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 16px;
    margin-bottom: 40px;

    input {
        padding: 8px 16px;
    }

    button {
        background-color: #2980b9;
        color: #fff;
        border: none;
        padding: 8px 16px;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;
        font-weight: bold;

        svg {
            margin-right: 8px;
        }

        &.cancelar {
            background-color: #c0392b;
        }

        &.alterar {
            background-color: #16a085;
        }
    }
`
