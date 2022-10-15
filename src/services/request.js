import axios from 'axios'
import { BASE_URL } from "../assets/constants/constants"


export const createRequest = (body) => {
    axios.post(`${BASE_URL}/request`, body)
        .then(response => {
            console.log(response)
            window.alert("O seu pedido foi cadastrado com sucesso!")
        })
        .catch(error => {
            console.log(error.response.data)
            window.alert("Ops, algo deu errado! Tente novamente!")
        })
}