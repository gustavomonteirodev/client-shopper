import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import { BASE_URL } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";
import ProductCard from "../components/ProductCard/ProductCard";
import ItemCard from "../components/ItemCard/ItemCard";
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

const GlobalState = (props) => {
    const { data } = useRequestData(`${BASE_URL}/products`, undefined)
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const alertSuccess = () => toast.success('Adicionado ao Carrinho! 🤩');
    const alertRemoved = () => toast.success('Item removido! 🙁');

    const addToCart = (product) => {
        const newProduct = { ...product, productQuantity: 1 }
        const newCart = [...cart, newProduct]
        setCart(newCart)
        alertSuccess()
      }
    
      const removeFromCart = (product) => {
    
        const newCart = cart.filter((item) => {
          return product.id !== item.id
        })
        setCart(newCart)
        alertRemoved()
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

const states = {cart, totalPrice }
const setters = {setCart, setTotalPrice}

return (
    <GlobalContext.Provider value={{states, setters,data, 
    addToCart, removeFromCart, increaseQty, decreaseQty, updateCart,
    productsShopper, cartItems }}>
      {props.children}
    </GlobalContext.Provider>
)
}

export default GlobalState;