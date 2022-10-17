import React from "react";
import { Forms, TotalValue, CartContainer, CartStyled } from "./CartPageStyles"
import { Button } from "@mui/material";
import GlobalStateContext from "../../Global/GlobalContext"
import { useContext } from "react"
import useForm from "../../hooks/useForm"
import { createRequest } from '../../services/request'

const CartPage = () => {

  const { states, cartItems } = useContext(GlobalStateContext);

  const [form, handleForm, clear] = useForm(
    {
      name: "",
      date: ""
    }
  )

  const submitRequest = (event) => {
    event.preventDefault()
    const cartDTO = states.cart.map((item) => {
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
    <CartContainer>
      <CartStyled>
      {cartItems}
      </CartStyled>
        <div>
          <TotalValue>
            <h3>VALOR TOTAL :</h3><p>R$ {states.totalPrice.toFixed(2)}</p> 
          </TotalValue>
          <Forms onSubmit={submitRequest}>
            <label htmlFor='name'><p>DIGITE SEU NOME E SOBRENOME:</p></label>
            <input
              name="clientName"
              placeholder="Nome e sobrenome"
              value={form.clientName}
              onChange={handleForm}
              required
            />

            <label htmlFor='date'><p>AGENDE UMA DATA PARA ENTREGA:</p></label>
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
    </CartContainer>
  );
}

export default CartPage;