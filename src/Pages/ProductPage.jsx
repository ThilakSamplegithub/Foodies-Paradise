import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/actions";
import { Box } from "@chakra-ui/react";
import {
  PRODUCT_FAILURE,
  PRODUCT_SUCCESS,
} from "../Redux/Products/actionTypes";
import ProductList from "../Components/ProductList";
const ProductPage = () => {
  const dispatch = useDispatch();
  const { isLoading, products, isError } = useSelector(
    (state) => state.productReducer
  );
  useEffect(() => {
    dispatch(getProducts())
      .then((res) => dispatch({ type: PRODUCT_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
  }, []);
  console.log(products);
  return (
    <Box>
      <ProductList products={products} />
    </Box>
  );
};

export default ProductPage;
