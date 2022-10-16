import styled from "styled-components";

export const HomeContainer = styled.div`
    margin-top: 20vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1px;

`
export const Circular = styled.div`

display: flex; 
margin-left: 50%;

`


export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 15px;
    padding: 10px;
    input {
        padding: 10px;
        border-radius: 10px;
    }
`

export const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-height: 100px;
`

export const TotalValue = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: center;
`