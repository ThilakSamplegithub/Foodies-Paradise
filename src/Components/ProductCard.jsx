import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Text,
  Heading,
  ButtonGroup,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ name, category, image, price }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt="Not Available" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>category:{category}</Text>
          <Text color="blue.600" fontSize="xl">
            price:{price}$
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing={{ base: 0, md: 2 }}>
          <Stack>
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </Stack>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
// {
//   "id": 1,
//   "name": "Peach - Indian",
//   "category": "fruit",
//   "image": "https://www.bigbasket.com/media/uploads/p/m/40218330_1-fresho-peach-indian.jpg?tr=w-3840,q=80",
//   "price": 150
// },
