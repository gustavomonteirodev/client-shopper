import styled from "styled-components"


export const HeaderContainer = styled.header`
    display: flex;
    border-top: 6px solid #2da77a;
    align-items: center;
    justify-content: space-around;
    background-color: #FFFFFF; 
    position: fixed;
    width: 100%;
    box-shadow: 0px 5px 20px rgb(0 45 98/ 6%);
    top: 0;
    left: 0;
    height: 13vh;
    img {
        width: 150px;
        }

`

export const ButtonStyled = styled.div`
    display: flex;
    gap: 30px;
    
    button {
        border-radius: 20px;
    }
`