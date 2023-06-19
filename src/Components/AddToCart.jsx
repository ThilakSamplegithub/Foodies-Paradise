import { Box, Button, Image, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementFunc, incrementFunc } from "../Redux/Products/actions";

const AddToCart = ({ id, image, name, price, quantity, handleRemove }) => {
  const dispatch = useDispatch();
  const { carArr } = useSelector((state) => state.productReducer);
  return (
    <Tbody>
      <Tr>
        <Td>
          <Image src={image} width={"80px"} alt="error" />
          <Text>{name}</Text>
        </Td>
        <Td>{price}</Td>
        <Td>
          <Button onClick={() => dispatch(decrementFunc(+id))}>-</Button>
          {quantity}
          <Button onClick={() => dispatch(incrementFunc(+id))}>+</Button>
        </Td>
        <Td isNumeric>{Number(price) * quantity}</Td>
        <Td>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default AddToCart;
