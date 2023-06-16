import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/actions";
import { Box, Heading, Skeleton, Stack } from '@chakra-ui/react'
import {
  PRODUCT_FAILURE,
  PRODUCT_SUCCESS,
} from "../Redux/Products/actionTypes";
import ProductList from "../Components/ProductList";
import { useSearchParams } from "react-router-dom";
const ProductPage = () => {
  const dispatch = useDispatch();
  const {isLoading,products,isError}=useSelector(state=>state.productReducer)
  const [searchParams]=useSearchParams("")
  let paramObj={
    params:{
      category:searchParams.getAll("category"),
      _sort:searchParams.get("order")&&"price",
      _order:searchParams.get("order")
    }
  }
  useEffect(() => {
    dispatch(getProducts(paramObj))
      .then((res) => dispatch({ type: PRODUCT_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
  }, [searchParams]);
  console.log(products)
  return isLoading?<Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>:isError?<Heading color={"red"}>Something went wrong</Heading>:<Box>
     <ProductList products={products}/>
  </Box>;
};

export default ProductPage;
