import {
  Box,
  Button,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../Components/AddToCart";
import {
  clearCart,
  removeItem,
  totalCartPrice,
} from "../Redux/Products/actions";
import TotalCart from "../Components/TotalCart";
import Navbar from "../Components/Navbar";

const AddToCartPage = () => {
  const [addToCartArr, setCartArr] = useState([]);
  const dispatch = useDispatch();
  // useSelector(state=>console.log(state.productReducer.cartArr))
  const { cartArr, totalPrice } = useSelector((state) => state.productReducer);
  console.log(cartArr, "is inside addToCart page");
  function handleRemove(id) {
    console.log(id);
    dispatch(removeItem(id));
  }
  useEffect(() => {
    dispatch(totalCartPrice());
  }, [cartArr]);

  return cartArr.length === 0 ? (
    <Heading>Your Cart is Empty</Heading>
  ) : (
    <Box>
      <Navbar />
      <TableContainer mt={"60px"}>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>price</Th>
              <Th>Quantity</Th>
              <Th isNumeric>SubTotal</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          {cartArr?.map((el) => (
            <AddToCart key={el.id} handleRemove={handleRemove} {...el} />
          ))}
        </Table>
      </TableContainer>
      <Button bg={"red"} onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <TotalCart cartTotal={totalPrice} />
    </Box>
  );
};

export default AddToCartPage;
