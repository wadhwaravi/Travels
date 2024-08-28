import React from 'react';
import { Box, FormControl, Select, Text, SimpleGrid } from '@chakra-ui/react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places = [], childClicked, setType, setRating, type, rating }) => {
    return (
        <Box p={6} bg="gray.50" h="full">
            <Text fontSize="2xl" fontWeight="bold" mb={8}>
                Restaurant, Hotel & Attraction Around You
            </Text>
            
            {/* Type Filter */}
            <FormControl mb={8}>
                <Text mb={2}>Type</Text>
                <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="Select type"
                >
                    <option value="restaurants">Restaurants</option>
                    <option value="hotels">Hotels</option>
                    <option value="attractions">Attractions</option>
                </Select>
            </FormControl>
            
            {/* Rating Filter */}
            <FormControl mb={8}>
                <Text mb={2}>Rating</Text>
                <Select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    placeholder="Select rating"
                >
                    <option value={0}>All</option>
                    <option value={3}>Above 3</option>
                    <option value={4}>Above 4</option>
                    <option value={4.5}>Above 4.5</option>
                </Select>
            </FormControl>
            
            {/* Displaying the number of results */}
            <FormControl mb={8}>
                <Text fontSize="sm" color="gray.600">
                    Displaying {places.length} result{places.length === 1 ? '' : 's'}
                </Text>
            </FormControl>

            {/* Places Grid */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
                {places.map((place, i) => (
                    <PlaceDetails
                        key={i}
                        place={place}
                        selected={Number(childClicked) === i}
                        // Ensure PlaceDetails component has the `selected` prop if required
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default List;
