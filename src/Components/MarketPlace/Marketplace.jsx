import React, { useState } from "react";
import { Box, Image, Text, Grid, Button, Flex, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { productData } from "./productdata";
// import { productData } from "../Home/SouvenirMarketplace";

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <Box bg="#FFF7E1" p="60px 0" minH="100vh">
      <Box w="85%" m="auto">
        <Text fontWeight="700" fontSize="4xl" mb="10px" color="black">
          Full Marketplace
        </Text>
        <Text fontSize="lg" color="black" mb="20px">
          Browse through our collection of local treasures.
        </Text>

        <Select
          placeholder="Filter by Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          mb="40px"
          w="200px"
        >
          <option value="All">All</option>
          <option value="Handicrafts">Handicrafts</option>
          <option value="Local Food Products">Local Food Products</option>
        </Select>

        <Grid templateColumns="repeat(3, 1fr)" gap="30px">
          {filteredProducts.map((product) => (
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
                <Text fontWeight="700" fontSize="lg" mb="10px" color="teal.800">
                  {product.price}
                </Text>
                <Button
                  mt="20px"
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
      </Box>
    </Box>
  );
};

export default Marketplace;
