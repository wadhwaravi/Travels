import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  Avatar,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";

function TravelBuddyMatching() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [matches, setMatches] = useState([]);
  const [filters, setFilters] = useState({
    destination: "",
    interest: "",
    budget: "",
  });
  const toast = useToast();

  useEffect(() => {
    // Fetch user profiles (replace with API call)
    const exampleProfiles = [
      {
        id: 1,
        name: "John Doe",
        avatar: "https://example.com/avatar1.jpg",
        destination: "Paris",
        dates: "2024-09-15 to 2024-09-20",
        interests: "Sightseeing, Museums",
        budget: "₹50,000",
      },
      {
        id: 2,
        name: "Jane Smith",
        avatar: "https://example.com/avatar2.jpg",
        destination: "Tokyo",
        dates: "2024-10-05 to 2024-10-10",
        interests: "Food, Culture",
        budget: "₹40,000",
      },
    ];
    setUserProfiles(exampleProfiles);
  }, []);

  const handleMatchSearch = () => {
    // Placeholder for matching algorithm (replace with real implementation)
    const filteredMatches = userProfiles.filter((profile) => {
      return (
        (filters.destination === "" ||
          profile.destination.includes(filters.destination)) &&
        (filters.interest === "" ||
          profile.interests.includes(filters.interest)) &&
        (filters.budget === "" || profile.budget === filters.budget)
      );
    });

    if (filteredMatches.length === 0) {
      toast({
        title: "No matches found.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }

    setMatches(filteredMatches);
  };

  return (
    <Box
      w="85%"
      m="auto"
      p="20px"
      mt="40px"
      bg="#FAF1ED"
      borderRadius="8px"
      color="black"
      marginBottom="100px"
    >
      <Text
        fontWeight="600"
        fontSize="2xl"
        textAlign="center"
        mb="20px"
        color="black"
      >
        Find Your Travel Buddy
      </Text>

      {/* Filter Options */}
      <Box mb="20px">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Input
            placeholder="Destination"
            value={filters.destination}
            onChange={(e) =>
              setFilters({ ...filters, destination: e.target.value })
            }
          />
          <Select
            placeholder="Interest"
            value={filters.interest}
            onChange={(e) =>
              setFilters({ ...filters, interest: e.target.value })
            }
          >
            <option value="Sightseeing">Sightseeing</option>
            <option value="Food">Food</option>
            <option value="Culture">Culture</option>
            <option value="Hiking">Hiking</option>
          </Select>
          <Select
            placeholder="Budget"
            value={filters.budget}
            onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          >
            <option value="₹20,000">₹20,000</option>
            <option value="₹40,000">₹40,000</option>
            <option value="₹60,000">₹60,000</option>
          </Select>
        </Grid>
        <Button
          mt="40px"
          fontWeight="700"
          color="white"
          bg="black"
          rounded="25px"
          p="23px 23px"
          onClick={handleMatchSearch}
        >
          Find Matches
        </Button>
      </Box>

      {/* Display Matches */}
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {matches.map((profile) => (
          <GridItem
            key={profile.id}
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Avatar src={profile.avatar} size="xl" mb="10px" />
            <Text fontWeight="600" fontSize="lg">
              {profile.name}
            </Text>
            <Text fontSize="md" color="gray.600">
              Destination: {profile.destination}
            </Text>
            <Text fontSize="md" color="gray.600">
              Dates: {profile.dates}
            </Text>
            <Text fontSize="md" color="gray.600">
              Interests: {profile.interests}
            </Text>
            <Text fontSize="md" color="gray.600">
              Budget: {profile.budget}
            </Text>
            <Button
              mt="40px"
              fontWeight="700"
              color="white"
              bg="black"
              rounded="25px"
              p="23px 23px"
            >
              Connect
            </Button>
          </GridItem>
        ))}
      </Grid>

      {/* Default Message */}
      {matches.length === 0 && (
        <Box textAlign="center" mt="40px">
          <Text fontSize="md" color="gray.600">
            No matches found. Please adjust your filters or try again later.
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default TravelBuddyMatching;
