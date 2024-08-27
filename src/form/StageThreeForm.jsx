import React from 'react';
import { Box, Text, Icon, Flex } from '@chakra-ui/react';
import { TRIPTYPE } from '../data';

const StageThreeForm = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
      maxW="1200px" // Increased max width to accommodate four cards in a row
      mx="auto"
    >
      <Box mb={6}>
        <Text as="h1" fontSize="2xl" fontWeight="bold" mb={2}>
          What kind of trip are you planning?
        </Text>
        <Text as="h6" fontSize="md" color="gray.600">
          Select One
        </Text>
      </Box>
      <Flex
        wrap="wrap"
        gap={4}
        justifyContent="space-between"
        width="100%"
      >
        {TRIPTYPE.map((trip, index) => (
          <Box
            key={index}
            p={4}
            borderRadius="md"
            boxShadow="md"
            bg="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            width="calc(25% - 16px)" // Adjusted width to fit four items in a row with spacing
            _hover={{
              boxShadow: 'lg',
              transform: 'scale(1.05)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            <Box mb={2} fontSize="2xl">
              {trip.icon}
            </Box>
            <Text fontSize="md" fontWeight="bold">
              {trip.trip_type}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default StageThreeForm;
