import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f6fa;
    padding: 16px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .3);
    margin-bottom: 24px;
`

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        margin-left: 16px;
        border: none;
        padding: 8px 16px;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
    }

    .delete {
        background-color: #c23616;
    }

    .save {
        background-color: #44bd32;
    }

    .edit {
        background-color: #e1b12c;
    }
`

export const Item = styled.div`
    display: flex;
`

export const Icon = styled.div`
    font-size: 3em;
`

export const Infos = styled.ul`
    padding-left: 24px;

    li {
        font-size: 14px;
        line-height: 22px;

        &:first-child {
            font-size: 18px;
            font-weight: bold;
        }
    }
`