import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import { HeaderContainer, ButtonStyled } from "./HeaderStyles"
import { goToHome, goToCart, goToStock, goToHistoric } from '../../routes/coordinator'
import logomarca from "../../assets/logomarca.png"

const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <img onClick={()=> goToHome(navigate)} src={logomarca} alt="Logo da Shopper.com.br"/>
      <ButtonStyled>
        <Button onClick={()=> goToStock(navigate)} variant="text" color="primary">Estoque</Button>
        <Button onClick={()=> goToHistoric(navigate)}variant="text" color="primary">Histórico</Button>
        {
          window.location.pathname === "/" ? 
          <Button onClick={()=> goToCart(navigate)} variant="contained" color="primary">Carrinho</Button> :
          <Button onClick={()=> goToHome(navigate)} variant="contained" color="primary">Retornar</Button>
        }
      </ButtonStyled>
    </HeaderContainer>
  );
}

export default Header;