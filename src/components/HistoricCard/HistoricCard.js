import React from "react";
import { ContainerHistoricCard } from "./HistoricCardStyles"

const historicCard = (props) => {

  return (
    <ContainerHistoricCard>
      <p>NOME DO CLIENTE: {props.request.clientName}</p>
      <p>DATA DA COMPRA: {props.product.dueDate}</p>
    </ContainerHistoricCard>
  );
}

export default historicCard;