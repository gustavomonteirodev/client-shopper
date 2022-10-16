import styled from "styled-components";

export const HomeContainer = styled.div`
    margin-top: 20vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1px;

`
export const Loader = styled.div`
    position: absolute;
    left:50%;
    top: 50%; 
    transform: translate(-50%,-50%);
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #2da77a;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


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