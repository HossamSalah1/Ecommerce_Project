import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext()

let token = localStorage.getItem('userToken');

let headers = {
    token: token
}

function addToCart(id) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
            productId: id
        },
        {
            headers
        }).then((res) => res)
        .catch((err) => err)
}

function getLogedProdect() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
            headers
        }).then((res) => res)
        .catch((err) => err)
}

let RemoveCareIteam = function (id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers }).then(
        (res) => res).catch((err) => err)
}
let UpdateCountIteam = function (id, count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count: count }, { headers }).then(
        (res) => res).catch((err) => err)
}
let OnlinePayment = function (cartId, url, values) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, {
        values: {

            shippingAddress: values
        }
    }, { headers }).then(
        (res) => res).catch((err) => err)
}


export default function CartContexProvider(props) {
    let [IdCart, SetIdCart] = useState(null)

    async function GitCartID() {

        let { data } = await getLogedProdect()
        SetIdCart(data?.data._id)
        console.log(IdCart);
        

    }
    useEffect(() => {

        GitCartID()
    }, [])

    return <CartContext.Provider value={{IdCart, addToCart, getLogedProdect, RemoveCareIteam, UpdateCountIteam, OnlinePayment }}>
        {props.children}
    </CartContext.Provider>
}