import React from "react";
import { Loader } from "../../pages/HomePage/HomePageStyles";
import StockCard from '../../components/StockCard/StockCard'
import { BASE_URL } from "../../constants/url"
import { useRequestData } from '../../hooks/useRequestData'
import { Title } from './StockPageStyles'

const StockPage = () => {

  const { data } = useRequestData(`${BASE_URL}/products`, undefined)

  const productsList = data && data.map((product) => {
    return (
      <StockCard product={product} />
    )
  })

  return (
    <div >
      <Title>
        <h3>ESTOQUE DOS PRODUTOS 🛒</h3>
      </Title>
      {data ? productsList : <Loader></Loader>}
      {productsList}
    </div>
  );
}

export default StockPage;