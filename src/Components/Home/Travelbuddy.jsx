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
    preference: "",
  });
  const toast = useToast();

  useEffect(() => {
    // Fetch user profiles (replace with API call)
    const exampleProfiles = [
      {
        id: 1,
        name: "John",
        avatar: "https://example.com/avatar1.jpg",
        destination: "Goa",
        dates: "2024-09-15 to 2024-09-20",
        interests: "Sightseeing, Museums,Food",
        budget: "₹60,000",
        preference: "male" 
      },
      {
        id: 2,
        name: "Jane",
        avatar: "https://example.com/avatar2.jpg",
        destination: "Delhi",
        dates: "2024-10-05 to 2024-10-10",
        interests: "Food, Culture",
        budget: "₹40,000",
        preference: "female"
      },
      {
        id: 3,
        name: "Alex",
        avatar: "https://example.com/avatar3.jpg",
        destination: "Goa",
        dates: "2024-11-01 to 2024-11-10",
        interests: "Tech, Sightseeing",
        budget: "₹60,000",
      },
      {
        id: 4,
        name: "Emily White",
        avatar: "https://example.com/avatar4.jpg",
        destination: "Chennai",
        dates: "2024-10-15 to 2024-10-20",
        interests: "Culture, Food",
        budget: "₹40,000",
      },
      {
        id: 5,
        name: "Michael Green",
        avatar: "https://example.com/avatar5.jpg",
        destination: "Hyderabad",
        dates: "2024-09-25 to 2024-10-05",
        interests: "History, Food",
        budget: "₹60,000",
      },
      {
        id: 6,
        name: "Sophia Black",
        avatar: "https://example.com/avatar6.jpg",
        destination: "Kolkata",
        dates: "2024-10-01 to 2024-10-10",
        interests: "Culture, Arts",
        budget: "₹40,000",
      },
      {
        id: 7,
        name: "Sunil",
        avatar: "https://example.com/avatar7.jpg",
        destination: "Goa",
        dates: "2024-09-20 to 2024-09-30",
        interests: "Historical Sites, Culture",
        budget: "₹20,000",
      },
      {
        id: 8,
        name: "Olivia Martinez",
        avatar: "https://example.com/avatar8.jpg",
        destination: "Udaipur",
        dates: "2024-10-10 to 2024-10-15",
        interests: "Sightseeing, Lakes",
        budget: "₹60,000",
      },
      {
        id: 9,
        name: "James Anderson",
        avatar: "https://example.com/avatar9.jpg",
        destination: "Goa",
        dates: "2024-11-05 to 2024-11-15",
        interests: "Beaches, Nightlife",
        budget: "₹60,000",
      },
      {
        id: 10,
        name: "Ava Thomas",
        avatar: "https://example.com/avatar10.jpg",
        destination: "Pune",
        dates: "2024-09-10 to 2024-09-20",
        interests: "Food, Tech",
        budget: "₹40,000",
      },
      {
        id: 11,
        name: "William Taylor",
        avatar: "https://example.com/avatar11.jpg",
        destination: "Agra",
        dates: "2024-10-20 to 2024-10-25",
        interests: "Historical Sites, Culture",
        budget: "₹20,000",
      },
      {
        id: 12,
        name: "Isabella Lee",
        avatar: "https://example.com/avatar12.jpg",
        destination: "Amritsar",
        dates: "2024-11-01 to 2024-11-07",
        interests: "Culture, Food",
        budget: "₹40,000",
      },
      {
        id: 13,
        name: "Ethan Harris",
        avatar: "https://example.com/avatar13.jpg",
        destination: "Varanasi",
        dates: "2024-10-15 to 2024-10-25",
        interests: "Spirituality, History",
        budget: "₹60,000",
      },
      {
        id: 14,
        name: "Mia Clark",
        avatar: "https://example.com/avatar14.jpg",
        destination: "Shimla",
        dates: "2024-09-25 to 2024-10-05",
        interests: "Nature, Hiking",
        budget: "₹40,000",
      },
      {
        id: 15,
        name: "Benjamin Lewis",
        avatar: "https://example.com/avatar15.jpg",
        destination: "Manali",
        dates: "2024-11-10 to 2024-11-20",
        interests: "Adventure, Nature",
        budget: "₹60,000",
      },
      {
        id: 16,
        name: "Charlotte Robinson",
        avatar: "https://example.com/avatar16.jpg",
        destination: "Rishikesh",
        dates: "2024-10-01 to 2024-10-10",
        interests: "Spirituality, Adventure",
        budget: "₹40,000",
      },
      {
        id: 17,
        name: "Liam Walker",
        avatar: "https://example.com/avatar17.jpg",
        destination: "Chandigarh",
        dates: "2024-09-20 to 2024-09-30",
        interests: "Architecture, Parks",
        budget: "₹20,000",
      },
      {
        id: 18,
        name: "Amelia Hall",
        avatar: "https://example.com/avatar18.jpg",
        destination: "Bhopal",
        dates: "2024-10-10 to 2024-10-20",
        interests: "History, Culture",
        budget: "₹40,000",
      },
      {
        id: 19,
        name: "Lucas Young",
        avatar: "https://example.com/avatar19.jpg",
        destination: "Nagpur",
        dates: "2024-11-05 to 2024-11-15",
        interests: "Nature, Wildlife",
        budget: "₹60,000",
      },
      {
        id: 20,
        name: "Harper Allen",
        avatar: "https://example.com/avatar20.jpg",
        destination: "Kochi",
        dates: "2024-09-10 to 2024-09-20",
        interests: "Beaches, Culture",
        budget: "₹60,000",
      },
      {
        id: 21,
        name: "Oliver Scott",
        avatar: "https://example.com/avatar21.jpg",
        destination: "Jaipur",
        dates: "2024-10-15 to 2024-10-25",
        interests: "Historical Sites, Culture",
        budget: "₹40,000",
      },
      {
        id: 22,
        name: "Ella Wright",
        avatar: "https://example.com/avatar22.jpg",
        destination: "Jaisalmer",
        dates: "2024-11-01 to 2024-11-10",
        interests: "Desert, Culture",
        budget: "₹60,000",
      },
      {
        id: 23,
        name: "Jacob King",
        avatar: "https://example.com/avatar23.jpg",
        destination: "Rajasthan",
        dates: "2024-09-25 to 2024-10-05",
        interests: "Culture, History",
        budget: "₹40,000",
      },
      {
        id: 24,
        name: "Sameer",
        avatar: "https://example.com/avatar24.jpg",
        destination: "Delhi",
        dates: "2024-10-05 to 2024-10-15",
        interests: "Food, Shopping",
        budget: "₹40,000",
        preference: "male"
      },
      {
        id: 25,
        name: "Elijah Hill",
        avatar: "https://example.com/avatar25.jpg",
        destination: "Gujarat",
        dates: "2024-11-10 to 2024-11-20",
        interests: "Culture, Nature",
        budget: "₹60,000",
      },
      {
        id: 26,
        name: "Chloe Adams",
        avatar: "https://example.com/avatar26.jpg",
        destination: "Pondicherry",
        dates: "2024-09-15 to 2024-09-25",
        interests: "Beaches, Food",
        budget: "₹40,000",
      },
      {
        id: 27,
        name: "James Brown",
        avatar: "https://example.com/avatar27.jpg",
        destination: "Shillong",
        dates: "2024-10-01 to 2024-10-10",
        interests: "Nature, Adventure",
        budget: "₹60,000",
      },
      {
        id: 28,
        name: "Avery Nelson",
        avatar: "https://example.com/avatar28.jpg",
        destination: "Dharamshala",
        dates: "2024-10-15 to 2024-10-25",
        interests: "Spirituality, Hiking",
        budget: "₹40,000",
      },
      {
        id: 29,
        name: "William Wilson",
        avatar: "https://example.com/avatar29.jpg",
        destination: "Varanasi",
        dates: "2024-09-05 to 2024-09-15",
        interests: "Spirituality, Culture",
        budget: "₹20,000",
      },
      {
        id: 30,
        name: "Mia Wright",
        avatar: "https://example.com/avatar30.jpg",
        destination: "Mysore",
        dates: "2024-10-20 to 2024-10-30",
        interests: "Historical Sites, Culture",
        budget: "₹60,000",
      },
    ];

    setUserProfiles(exampleProfiles);
  }, []);

  const handleMatchSearch = () => {
    const filteredMatches = userProfiles.filter((profile) => {
      const destinationMatch =
        filters.destination === "" ||
        profile.destination
          .toLowerCase()
          .includes(filters.destination.toLowerCase());
      const interestMatch =
        filters.interest === "" ||
        profile.interests
          .toLowerCase()
          .includes(filters.interest.toLowerCase());
      const budgetMatch =
        filters.budget === "" || profile.budget === filters.budget;
      const preferenceMatch = 
        filters.preference === "" || profile.preference === filters.preference;

      return destinationMatch && interestMatch && budgetMatch && preferenceMatch;
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
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
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
          <Select
            placeholder="Travel Buddy Preference"
            value={filters.preference}
            onChange={(e) => setFilters({ ...filters, preference: e.target.value })}
          >
            <option value="male">Male Buddy</option>
            <option value="female">Female Buddy</option>
            <option value="any">Any</option>
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
              onClick={() => alert("Connection request is sent!")}
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
