import styled from "styled-components";

export const CartContainer = styled.div`
    margin-top: 20vh;
    display: flex; 
    align-items: center;
    flex-direction: column;

    @media screen and (max-width:1000px){
    justify-content: center;
    width: 90%;
    border-bottom: none;
    }

`
export const TotalValue = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(211, 211, 211);
    width: 35vw;
    height: 5vh;
    justify-content: center;
    align-items: center;
    margin-top: 10px; 

    h3 {
        font-weight: 200;
        font-size: 14px;
    }

    P {
        font-size: 23px;
        color:#2da77a; 
        padding-left: 5px;
    }

    @media screen and (max-width:1000px){
    width: 100%;
    padding-top: 5vh;
    border-bottom: none;
    }
`
export const Forms = styled.form`
    margin-top: 15px; 
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 10px;

    input {
        padding: 10px;
        border-radius: 20px;
        border: 1px solid rgb(211, 211, 211);
    }
    P {
        font-size: 12px; 
    }

    Button {
        margin-bottom: 30px;
        border-radius: 20px;
    }
`
export const CartStyled = styled.form`

`