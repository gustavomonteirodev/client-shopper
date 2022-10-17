import styled from "styled-components"

export const ContainerStockCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(211, 211, 211);
    width: 60vw;
    padding-left: 50px;
    margin-left: 15%;

    h3 {
        font-weight: 300;
        font-size: 15px;
    }

    p {
        font-weight: 300;
        font-size: 15px; 
        color:#2da77a
    }

    
    @media screen and (max-width:1000px){
        padding-left: 0;
        margin-left: 0;
        margin: 0 auto;
    }
`