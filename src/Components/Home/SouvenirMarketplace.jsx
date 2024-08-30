//
import React from "react";
import { Box, Image, Text, Grid, Button, Flex, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export const productData = [
  {
    id: 1,
    name: "Madhubani Painting",
    image: "https://example.com/madhubani.jpg",
    price: "₹2,500",
    description: "Traditional Madhubani painting by artisans from Bihar.",
    category: "Handicrafts",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Pashmina Shawl",
    image: "https://example.com/pashmina.jpg",
    price: "₹5,000",
    description: "Authentic Kashmiri Pashmina shawl.",
    category: "Handicrafts",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Mysore Pak",
    image: "https://example.com/mysorepak.jpg",
    price: "₹500",
    description: "Famous Mysore Pak from Karnataka.",
    category: "Local Food Products",
    rating: 4.7,
  },
  // Add more products as needed
];

const SouvenirMarketplace = () => {
  return (
    <Box bg="#FFF7E1" p="60px 0" mt="60px" marginBottom="100px">
      <Box w="85%" m="auto" textAlign="center">
        <Text fontWeight="700" fontSize="4xl" mb="10px" color="black">
          Shop Local Treasures
        </Text>
        <Text fontSize="lg" color="black" mb="40px">
          Discover unique souvenirs and support local artisans.
        </Text>

        <Grid templateColumns="repeat(3, 1fr)" gap="30px">
          {productData.map((product) => (
            <Box
              key={product.id}
              bg="white"
              borderRadius="15px"
              boxShadow="lg"
              overflow="hidden"
              position="relative"
              _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
            >
              <Image
                src={product.image}
                alt={product.name}
                objectFit="cover"
                w="100%"
                h="200px"
              />
              <Box p="20px" textAlign="left">
                <Text fontWeight="600" fontSize="2xl" mb="5px" color="black">
                  {product.name}
                </Text>
                <Flex align="center" mb="10px">
                  <Icon as={StarIcon} color="yellow.400" />
                  <Text ml="2" fontSize="sm" color="gray.600">
                    {product.rating} / 5
                  </Text>
                </Flex>
                <Text fontSize="md" color="gray.600" mb="10px">
                  {product.description}
                </Text>
                <Text fontWeight="700" fontSize="lg" mb="10px" color="teal.800">
                  {product.price}
                </Text>
                <Button
                  mt="40px"
                  fontWeight="700"
                  color="white"
                  bg="black"
                  rounded="25px"
                  p="23px 23px"
                  as={Link}
                  to={`/marketplace/${product.id}`}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
        <Button
          mt="40px"
          fontWeight="700"
          color="white"
          bg="black"
          rounded="25px"
          p="23px 23px"
          as={Link}
          to="/marketplace"
        >
          Browse Marketplace
        </Button>
      </Box>
    </Box>
  );
};

export default SouvenirMarketplace;
