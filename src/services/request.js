import axios from 'axios'
import { BASE_URL } from "../constants/url"


export const createRequest = (body) => {
    axios.post(`${BASE_URL}/request`, body)
        .then(response => {
            window.alert("O seu pedido foi cadastrado com sucesso!")
            console.log(response)
        })
        .catch(error => {
            window.alert("Ops, algo deu errado! Tente novamente!")
            console.log(error.response.data)
        })
}