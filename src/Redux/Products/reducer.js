import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    products:[],
    isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case PRODUCT_FAILURE:{
            return{...state,isLoading:false,isError:true}
        }
        case PRODUCT_SUCCESS:{
            console.log(payload)
            return{...state,isLoading:false,products:payload}
        }
        default:{
            return state
        }
    }
}