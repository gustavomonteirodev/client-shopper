import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage'
import Header from "../components/Header/Header"
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import StockPage from '../pages/StockPage/StockPage';
import HistoricPage from '../pages/HistoricPage/HistoricPage';
import CartPage from '../pages/CartPage/CartPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index exact default path="/" element={<HomePage />} />
                <Route exact path='/estoque' element={<StockPage />} />
                <Route exact path='/historico' element={<HistoricPage />} />
                <Route exact path='/carrinho' element={<CartPage />} />
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;