import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext()

export default function CartContexProvider(props) {

    let token = localStorage.getItem('userToken');
    console.log(token);

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


    return <CartContext.Provider value={{ addToCart,getLogedProdect }}>
        {props.children}
    </CartContext.Provider>
}