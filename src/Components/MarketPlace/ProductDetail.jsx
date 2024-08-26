import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { productData } from "../Home/SouvenirMarketplace";
import AddToCart from "./AddToCart";
const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) return <Text>Product not found</Text>;

  return (
    <Box bg="#FFF7E1" p="60px 0" minH="100vh">
      <Box
        w="70%"
        m="auto"
        bg="white"
        p="40px"
        borderRadius="15px"
        boxShadow="lg"
      >
        <Flex>
          <Image
            src={product.image}
            alt={product.name}
            objectFit="cover"
            w="50%"
            h="400px"
            mr="40px"
            borderRadius="15px"
          />
          <Box textAlign="left">
            <Text fontWeight="700" fontSize="4xl" mb="10px" color="black">
              {product.name}
            </Text>
            <Text fontSize="lg" color="gray.600" mb="20px">
              {product.description}
            </Text>
            <Text fontWeight="700" fontSize="2xl" mb="20px" color="teal.800">
              {product.price}
            </Text>
            {/* <Button
              fontWeight="700"
              color="white"
              bg="black"
              rounded="25px"
              p="23px 23px"
            >
              Add to Cart
            </Button> */}
            <AddToCart productId={product.id} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductDetail;
