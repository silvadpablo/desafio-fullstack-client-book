import styled from "styled-components";

export const StyledDialog = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(255,255,255,0.6);
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;

    h2 {
        color: var(--grey-4);
    }

    button {
        width: 100%;
        margin: 0;
    }

    label {
        text-align: left;
    }

    .close {
        cursor: pointer;
        background-color: var(--primary);
        border-radius: 255px;
        color: var(--grey-1);
        padding: 5px;
    }

    form {
        border: 2px solid black;
        padding: 20px;
        width: 35%;
        background-color: var(--grey-3);
    }

    .form {
        gap: 15px;
    }
`