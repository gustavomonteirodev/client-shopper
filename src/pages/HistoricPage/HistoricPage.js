import React from "react";
import { Loader } from "../../pages/HomePage/HomePageStyles";
import { BASE_URL } from "../../constants/url"
import { useRequestData } from '../../hooks/useRequestData'
import HistoricCard from "../../components/HistoricCard/HistoricCard"
import { Title } from './HistoricPageStyles'

const HistoricPage = () => {

  const { data } = useRequestData(`${BASE_URL}/getrequests`, undefined)

  const requestsList = data && data.map((request) => {
    return (
      <HistoricCard request={request} key={request.id} />
    )
  })
  return (
    <div>
      <Title>
        <h3> HISTÓRICO DE PEDIDOS 🛒</h3>
        <h3> EM MANUTENÇÃO 👨‍💻</h3>
      </Title>
      {data ? requestsList : <Loader></Loader>}
      {requestsList}

    </div>
  );
}

export default HistoricPage;