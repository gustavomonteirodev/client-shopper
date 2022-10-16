import { useState, useEffect } from "react"
import { HomeContainer, Circular, TotalValue, Forms } from "./HomePageStyles";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";
import ItemCard from "../../components/ItemCard/ItemCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import { createRequest } from "../../services/request"
import { Button } from "@mui/material";

const HomePage = () => {

  const { data } = useRequestData(`${BASE_URL}/products`, undefined)

  const [cart, setCart] = useState([])

  const [totalPrice, setTotalPrice] = useState(0)

  const [form, handleForm, clear] = useForm(
    {
      name: "",
      date: ""
    }
  )

  const addToCart = (product) => {
    const newProduct = { ...product, productQuantity: 1 }
    const newCart = [...cart, newProduct]
    setCart(newCart)
  }

  const removeFromCart = (product) => {

    const newCart = cart.filter((item) => {
      return product.id !== item.id
    })
    setCart(newCart)
  }

  const increaseQty = (product) => {
    const productQuantity = product.productQuantity + 1;
    const newProduct = { ...product, productQuantity }
    updateCart(newProduct)
  }

  const decreaseQty = (product) => {
    const productQuantity = product.productQuantity - 1;
    const newProduct = { ...product, productQuantity }
    updateCart(newProduct)
  }

  const updateCart = (productToUpdate) => {
    const newCart = cart.map((product) => {
      if (product.id === productToUpdate.id) {
        return productToUpdate
      }

      return product
    })

    setCart(newCart)
  }

  const calculateTotalPrice = () => {
    let sum = 0

    for (let item of cart) {
      let qty = item.productQuantity
      let price = item.price
      sum += price * qty
    }
    setTotalPrice(sum)
  }

  useEffect(() => {
    calculateTotalPrice()
  }, [cart])

  const productsShopper = data && data.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        addToCart={addToCart}
      />
    )
  })


  const cartItems = cart.map((item) => {
    return (
      <ItemCard
        key={item.id}
        item={item}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
      />
    )
  })

  const submitRequest = (event) => {
    event.preventDefault()
    const cartDTO = cart.map((item) => {
      return (
        {
          productId: item.id,
          productQuantity: item.productQuantity

        }
      )
    })

    const request = {
      ...form, list: cartDTO
    }

    createRequest(request)
    clear()
  }


  return (
    <>
      <HomeContainer>
        {data ? productsShopper : <Circular> <CircularProgress /> </Circular>}
      </HomeContainer>

      <div>
        <TotalValue>
          <h3>Valor total da compra: R$ <b>{totalPrice.toFixed(2)}</b></h3>
        </TotalValue>
        {cartItems}

        <Forms onSubmit={submitRequest}>
          <label htmlFor='name'><b>Insira seu nome:</b></label>
          <input
            name="clientName"
            placeholder="Seu nome"
            value={form.clientName}
            onChange={handleForm}
            required
          />

          <label htmlFor='date'><b>Selecione uma data para a entrega:</b></label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleForm}
            required
          />

          <Button type="submit" variant="contained" color="primary">Finalizar compra!</Button>
        </Forms>
      </div>
    </>
  );
}

export default HomePage;