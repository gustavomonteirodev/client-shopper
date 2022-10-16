import React from "react";
import { Loader } from "../../pages/HomePage/HomePageStyles";
import StockCard from '../../components/StockCard/StockCard'
import { BASE_URL } from "../../constants/url"
import { useRequestData } from '../../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { ButtonAndTitle } from './StockPageStyles'
import { goToHome } from "../../routes/coordinator"

const  StockPage = () => {
  const navigate = useNavigate()
  const { data } = useRequestData(`${BASE_URL}/products`, undefined)
   
  const productsList = data && data.map((product) => {
      return (
          <StockCard product={product} />
      )
  })

  return (
    <div className="StockPage">
      <ButtonAndTitle>
                <h3>ESTOQUE DOS PRODUTOS 🛒</h3>
            </ButtonAndTitle>
            {data ? productsList : <Loader></Loader>}
            {productsList}
    </div>
  );
}

export default StockPage;