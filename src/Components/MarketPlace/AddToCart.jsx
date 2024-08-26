import React from "react";
import { Button } from "@chakra-ui/react";

const AddToCart = ({ productId }) => {
  const handleAddToCart = () => {
    // Implement your add-to-cart logic here
    alert(`Product ${productId} added to cart`);
  };

  return (
    <Button
      onClick={handleAddToCart}
      fontWeight="700"
      color="white"
      bg="black"
      rounded="25px"
      p="23px 23px"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
