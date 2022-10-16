import React from "react";
import { Forms, TotalValue } from "./CartPageStyles"
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
    <div>
      {cartItems}
        <div>
          <TotalValue>
            <h3>Valor total da compra: R$ <b>{states.totalPrice.toFixed(2)}</b></h3>
          </TotalValue>
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
    </div>
  );
}

export default CartPage;