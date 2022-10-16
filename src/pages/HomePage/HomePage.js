import React from "react";
import {HomeContainer} from "./HomePageStyles"
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url"
import ProductCard from "../../components/ProductCard/ProductCard"

const HomePage = () => {

  const { data } = useRequestData(`${BASE_URL}/products`, undefined)

  const productsShopper = data && data.map((product)=> {
    return (
      <ProductCard
      key={product.id}
      product={product}
      />
    )
  })
  console.log(productsShopper)
  return (
    <HomeContainer>
      {productsShopper}
    </HomeContainer>
  );
}

export default HomePage;