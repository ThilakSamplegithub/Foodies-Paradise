import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import creditcard from "../Images/creditcard.webp";

export default function CheckoutPage() {
  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);

  const handlePaymentSubmit = () => {
    // Handle payment submission logic here
    setIsPaymentSubmitted(true); // payment button disable and enable
  };

  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      bg={'gray.100'}
      align={'center'}
      justify={'center'}
      spacing={{ base: 4, md: 0 }}
      py={{ base: 10, md: 0 }}
    >
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
        boxShadow={'2xl'}
        rounded={'xl'}
        bg={'white'}
      >
        <Stack spacing={4} w={'full'} maxW={'md'} borderRadius={'xl'}>
          <Heading fontSize={'2xl'}>Enter Your Address</Heading>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" placeholder="Enter your address" />
          </FormControl>
          <FormControl id="apartment">
            <FormLabel>Apartment/Unit (optional)</FormLabel>
            <Input type="text" placeholder="Enter your apartment/unit" />
          </FormControl>
          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input type="text" placeholder="Enter your city" />
          </FormControl>
          <FormControl id="state">
            <FormLabel>State</FormLabel>
            <Input type="text" placeholder="Enter your state" />
          </FormControl>
          <FormControl id="zip">
            <FormLabel>ZIP Code</FormLabel>
            <Input type="text" placeholder="Enter your ZIP code" maxLength={6}/>
          </FormControl>
          <Button
            colorScheme={'blue'}
            variant={'solid'}
            onClick={handlePaymentSubmit}
            isDisabled={isPaymentSubmitted}
          >
            Proceed to Payment
          </Button>
        </Stack>
      </Flex>
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
        boxShadow={'2xl'}
        rounded={'xl'}
        bg={'white'}
      >
        <Stack spacing={4} w={'full'} maxW={'md'} borderRadius={'xl'}>
          <Image
            src={creditcard}
            alt={'Credit Card'}
            boxSize={105}
            alignSelf={'center'}
            borderRadius={'xl'}
            w={'100%'}
            h={'100%'}
          />
          <Heading fontSize={'2xl'}>Payment Information</Heading>
          <FormControl id="cardNumber">
            <FormLabel>Card Number</FormLabel>
            <Input
              type="text"
              placeholder="Enter your card number"
              maxLength={16}
            />
          </FormControl>
          <Flex justify="space-between">
            <FormControl id="expiryMonth">
              <FormLabel>Expiry Month</FormLabel>
              <Input
                type="text"
                placeholder="MM"
                maxLength={2}
              />
            </FormControl>
            <FormControl id="expiryYear">
              <FormLabel>Expiry Year</FormLabel>
              <Input
                type="text"
                placeholder="YYYY"
                maxLength={2}
              />
            </FormControl>
          </Flex>
          <FormControl id="cvv">
            <FormLabel>CVV</FormLabel>
            <Input
              type="text"
              placeholder="Enter your CVV"
              maxLength={3}
            />
          </FormControl>
          <Button
            colorScheme={'blue'}
            variant={'solid'}
            onClick={handlePaymentSubmit}
            isDisabled={!isPaymentSubmitted}
          >
            {'Pay Now'}
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
}
