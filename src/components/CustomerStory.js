import React from 'react';
import { Box, Heading, Text, Badge } from '@chakra-ui/react';

const CustomerStory = ({ story }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md">
      <Heading size="sm">{story.companyName}</Heading>
      <Badge colorScheme="blue" mt={1}>{story.industry}</Badge>
      <Text mt={2}>{story.useCase}</Text>
      <Text mt={2} fontWeight="bold">Business Outcome: {story.businessOutcome}</Text>
    </Box>
  );
};

export default CustomerStory;