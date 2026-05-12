import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext()

export default function CartContexProvider(props) {

    let token = localStorage.getItem('userToken');
    let headers = {
        headers: token
    }

    function addToCart(id) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            {
                productId: id
            },
            {
                headers: headers
            }).then((res) => res)
            .catch((err) => err)
    }


    return <CartContext.Provider value={{ addToCart }}>
        {props.children}
    </CartContext.Provider>
}