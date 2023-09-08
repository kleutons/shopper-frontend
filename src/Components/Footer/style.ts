import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: #fbfbfb;
    padding: 50px 0;
    margin-top: 90px;
    border-top: 1px #ccc solid;
    
    >div.container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }

    nav ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        gap: 25px;
        font-size: 19px;
    }

    nav a{
        color: #000;
        text-decoration: none;
    }
    nav a:hover{
        text-decoration: underline;
    }
`