import React from "react";
import Button from '@mui/material/Button'
import { HeaderContainer, ButtonStyled } from "./HeaderStyles"
import logomarca from "../../assets/logomarca.png"
const  Header = () => {
  return (
    <HeaderContainer>
    <img src={logomarca} alt="Logo da Shopper.com.br" />
    <ButtonStyled>
       <Button variant="text" color="primary">Estoque</Button>
       <Button variant="text" color="primary">Histórico</Button>
       <Button variant="contained" color="primary">Carrinho</Button>
       </ButtonStyled>
        </HeaderContainer>
  );
}

export default Header;