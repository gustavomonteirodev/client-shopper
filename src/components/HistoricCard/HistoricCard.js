import React from "react";
import { ContainerHistoricCard } from './HistoricCardStyles'

const historicCard = (props) => {
  return (
    <ContainerHistoricCard>
      {/* <h3>NOME DO PRODUTO: {props.request.id}</h3> */}
      <p>ITENS DISPONÍVEIS: {props.request.clientName}</p>
      {/* <p>ITENS DISPONÍVEIS: {props.product.dueDate}</p> */}
    </ContainerHistoricCard>
  );
}

export default historicCard;