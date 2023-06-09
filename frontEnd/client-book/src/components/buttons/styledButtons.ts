import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    color: var(--grey-1);
    padding: 5px;
    border-radius: var(--radius);
    font-size: var(--body);
    background-color: var(--primary);
`

export const StyledGreenButton = styled(StyledButton)`
    background-color: var(--secondary);

    :hover {
        color: var(--grey-4);
    }
`

export const StyledRedButton = styled(StyledButton)`
    background-color: darkred;

    :hover {
        color: var(--grey-4);
    }
`