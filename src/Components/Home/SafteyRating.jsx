import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SafetyRating() {
  const [searchTerm, setSearchTerm] = useState("");
  const [safetyData, setSafetyData] = useState(null);
  const toast = useToast();

  const handleSearch = () => {
    // Placeholder for the search functionality
    if (searchTerm.trim() === "") {
      toast({
        title: "Please enter a location.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Example data - replace with API call
    const exampleData = {
      location: searchTerm,
      rating: "Moderate",
      summary:
        "This location has an average safety rating based on historical data and user reviews.",
      tips: "Avoid traveling alone at night and be cautious of your surroundings.",
    };

    setSafetyData(exampleData);
  };

  return (
    <Box bg="white" p="20px" mt="40px" borderRadius="8px" marginBottom="0px">
      <Box textAlign="center" mb="20px">
        <Text fontWeight="600" fontSize="2xl">
          Stay Safe, Travel Smart
        </Text>
        <Text fontSize="md" mt="5px">
          Check safety ratings based on historical data and user reviews.
        </Text>
      </Box>

      {/* Search Bar */}
      <Box mb="20px" display="flex" justifyContent="center">
        <Input
          placeholder="Search for a place"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="400px"
          mr="10px"
        />
        <IconButton
          mt="-2px"
          color="white"
          bg="black"
          rounded="25px"
          p="25px 25px"
          icon={<SearchIcon />}
          onClick={handleSearch}
        />
      </Box>

      {/* Safety Data Display */}
      {safetyData && (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            w="100%"
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Text fontWeight="600" fontSize="lg">
              Location: {safetyData.location}
            </Text>
            <Text fontWeight="500" fontSize="md" color="teal.500">
              Safety Rating: {safetyData.rating}
            </Text>
            <Text fontSize="md" mt="10px">
              {safetyData.summary}
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Text fontWeight="600" fontSize="lg">
              Safety Tips
            </Text>
            <Text fontSize="md" mt="10px">
              {safetyData.tips}
            </Text>
            <Button
              mt="40px"
              fontWeight="700"
              color="white"
              bg="black"
              rounded="25px"
              p="23px 23px"
            >
              Learn More
            </Button>
          </GridItem>
        </Grid>
      )}

      {/* Default Message */}
      {!safetyData && (
        <Box textAlign="center" mt="40px">
          <Text fontSize="md" color="gray.600">
            Enter a location to see its safety rating.
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default SafetyRating;
