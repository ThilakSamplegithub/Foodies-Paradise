import { PRODUCT_REQUEST } from "./actionTypes"
import axios from "axios"
export const getProducts=(paramObj)=>async(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    let res=await axios.get(`https://gorgeous-flight-api1.onrender.com/groceries`,paramObj)
    return res.data
}