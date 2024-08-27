import React, { useState, useEffect } from "react";
import { Box, Button, Image, Text, Flex, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { productData } from "../MarketPlace/productdata";

function CartPage () {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = [
      { id: 1, name: "Madhubani Painting", quantity: 2 },
      { id: 3, name: "Mysore Pak", quantity: 1 },
    ];

    const itemsWithDetails = storedCartItems.map((cartItem) => {
      const product = productData.find((p) => p.id === cartItem.id);
      return {
        ...product,
        quantity: cartItem.quantity,
      };
    });

    setCartItems(itemsWithDetails);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <Box bg="#FFF7E1" p="60px 0" minH="100vh">
      <Box w="85%" m="auto">
        <Text fontWeight="700" fontSize="4xl" mb="20px" color="black">
          Your Cart
        </Text>

        {cartItems.length === 0 ? (
          <Text fontSize="lg" color="black">
            Your cart is empty.
          </Text>
        ) : (
          <Flex direction="column" gap="20px">
            {cartItems.map((item) => (
              <Box
                key={item.id}
                bg="white"
                borderRadius="15px"
                boxShadow="lg"
                p="20px"
                _hover={{ transform: "scale(1.02)", transition: "all 0.3s" }}
              >
                <Flex align="center" gap="20px">
                  <Image
                    src={item.image}
                    alt={item.name}
                    objectFit="cover"
                    w="120px"
                    h="120px"
                  />
                  <Box textAlign="left">
                    <Text fontWeight="600" fontSize="xl" mb="5px" color="black">
                      {item.name}
                    </Text>
                    <Text fontWeight="700" fontSize="md" color="teal.800">
                      Quantity: {item.quantity}
                    </Text>
                    <Text fontWeight="700" fontSize="md" color="teal.800">
                      Price: {item.price} x {item.quantity}
                    </Text>
                  </Box>
                </Flex>
                <Divider my="15px" />
                <Flex justify="space-between" align="center">
                  <Text fontWeight="700" fontSize="md" color="black">
                    Total:
                  </Text>
                  <Text fontWeight="700" fontSize="md" color="teal.800">
                    ₹{(parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity).toFixed(2)}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        )}

        <Box mt="40px">
          <Flex direction="column" align="flex-end">
            <Flex justify="flex-end" align="center" mb="15px" w="full">
              <Text fontWeight="700" fontSize="2xl" color="black" mr="10px">
                Total:
              </Text>
              <Text fontWeight="700" fontSize="2xl" color="teal.800">
                ₹{calculateTotal()}
              </Text>
            </Flex>
            <Flex justify="space-between" align="center" w="full">
              <Button
                fontWeight="700"
                color="black"
                bg="gray.200"
                rounded="25px"
                p="15px 30px"
                as={Link}
                to="/marketplace"
                _hover={{ bg: "gray.300" }}
              >
                Continue Shopping
              </Button>
              <Button
                fontWeight="700"
                color="white"
                bg="black"
                rounded="25px"
                p="15px 30px"
                as={Link}
                to="/checkout"
              >
                Proceed to Checkout
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
