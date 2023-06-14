import { PRODUCT_REQUEST } from "./actionTypes"
import axios from "axios"
export const getProducts=()=>async(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    let res=await axios.get(`https://gorgeous-flight-api1.onrender.com/groceries`)
    return res.data
}