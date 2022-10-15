import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
// import Stock from '../pages/StockPage/StockPage'
import Header from "../components/Header/Header"

const Router = () => {
    return (

        <BrowserRouter>
          <Header />
            <Routes>
                <Route index element = {< Home />} />
                    {/* <Home  /> */}
                    {/* <Stock /> */}
                {/* <Route path="*" element = {<ErrorPage />}  /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Router;