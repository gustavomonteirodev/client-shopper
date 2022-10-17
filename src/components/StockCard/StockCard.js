import React from "react";
import { ContainerStockCard } from './StockCardStyles'

const StockCard = (props) => {
  return (
    <ContainerStockCard>
      <h3>NOME DO PRODUTO: {props.product.name}</h3>
      <p>ITENS DISPONÍVEIS: {props.product.qty_stock}</p>
    </ContainerStockCard>
  );
}

export default StockCard;