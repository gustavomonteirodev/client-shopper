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
    z-index: 9999;
    img {
        width: 150px;
    }
    img:hover {
        cursor: pointer;
    }

    @media screen and (max-width:1000px){
    display: flex; 
    flex-direction: column;
    height: 17vh;
}
`

export const ButtonStyled = styled.div`
    display: flex;
    gap: 30px;
    
    button {
        border-radius: 20px;
        padding: 5px 30px 5px 30px;
    }

    @media screen and (max-width:1000px){
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3%;
    button {
        width: 25%;
    }
}
`

