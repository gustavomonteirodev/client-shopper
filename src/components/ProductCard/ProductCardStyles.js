import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    width: 190px;
    height: 250px;
    border-radius: 20px; 
    margin: 30px 20px 20px 2em;
    padding: 10px 10px 10px 10px;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;
    outline: 0;
    box-sizing: border-box;
    p {
        font-size: 14px
    }

    h4 {
        color: #2da77a; 
        font-size: 18px;
    }

    button {
        border-radius: 20px;
    }

`