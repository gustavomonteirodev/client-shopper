import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    border-top: 6px solid #2da77a;
    align-items: center;
    justify-content: space-around;
    background-color: #FFFFFF; 
    position: fixed;
    width: 100%;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;
    top: 0;
    left: 0;
    height: 13vh;
    img {
        width: 150px;
    }
    img:hover {
        cursor: pointer;
    }
`

export const ButtonStyled = styled.div`
    display: flex;
    gap: 30px;
    
    button {
        border-radius: 20px;
    }
`