import React from 'react';
import { Box, Text, VStack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { INTEREST } from '../data';

const StageFourForm = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={6}
      maxW="600px"
      mx="auto"
      bg="gray.50"
      borderRadius="md"
      boxShadow="md"
    >
      <Box mb={6} textAlign="center">
        <Text as="h1" fontSize="2xl" fontWeight="bold" mb={2}>
          Tell us what you’re interested in
        </Text>
        <Text as="p" fontSize="md" color="gray.600">
          Select all that apply.
        </Text>
      </Box>
      <Box width="100%">
        <CheckboxGroup>
          <VStack align="start" spacing={3}>
            {INTEREST.map((interest, index) => (
              <Checkbox key={index} size="md" colorScheme="blue">
                <Text as="h4" fontSize="md">
                  {interest}
                </Text>
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default StageFourForm;
