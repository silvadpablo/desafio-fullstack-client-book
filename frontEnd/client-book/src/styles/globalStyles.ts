import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
        font-family: "Inter", sans-serif;
        list-style: none;
    }
    
    button{
        cursor:pointer;
    } 
    
    button:disabled{
        cursor: not-allowed;
    }
    
    input:focus{
        outline:none;
        border:none;
    }
    
    body{
        max-width: 100%;
        font-family: var(--family);
        background-color: #212529;
    }
    
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Nunito:wght@700&family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
    
    :root {
        --primary: #FD377E;
        --primary-2: #e34981;
        --secondary: #03b898;
        --grey-1: #f8f9fa;
        --grey-2: #e9ecef;
        --grey-3: #868e96;
        --grey-4: #212529;

        --family: 'Nunito', sans-serif;
        --title-1: 1.75rem;
        --title-2: 1.5rem;
        --title-3: 1.25rem;
        --title-4: 0.75rem;
        --title-weight: 700;
        --headline: 1rem;
        --body: 0.75rem;
        --weight-regular: 400;

        --btn-primary-padding: 13px 20px;

        --radius: 8px;
        --radius-card: 4px;
    }

    .grey-bg {
        background-color: #f8f9fa;
    }

    .flex {
    display: flex;
    }
  
    .items-center {
    align-items: center;
    }

    .items-start {
    align-items: flex-start;
    }

    .items-end {
    align-items: flex-end;
    }

    .justify-center {
    justify-content: center;
    }

    .justify-between {
    justify-content: space-between;
    }

    .justify-around {
    justify-content: space-around;
    }

    .justify-end {
    justify-content: flex-end;
    }

    .justify-start {
    justify-content: flex-start;
    }

    .flex-col {
    flex-direction: column;
    }

    .wrap {
    flex-wrap: wrap;
    }
`;
