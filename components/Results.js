import React from 'react';
import { Box, VStack, Heading, Text, List, ListItem, ListIcon, Badge } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/react';
import CustomerStory from './CustomerStory';

const Results = ({ data }) => {
  const { score, helpfulFeatures, matchingCustomerStories } = data;

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Heading size="lg">CockroachDB Fit Score</Heading>
        <Text fontSize="4xl" fontWeight="bold" color={score > 70 ? "green.500" : score > 40 ? "yellow.500" : "red.500"}>
          {score}%
        </Text>
      </Box>

      <Box>
        <Heading size="md">Key CockroachDB Features for Your Use Case</Heading>
        <List spacing={3} mt={2}>
          {helpfulFeatures.map((feature, index) => (
            <ListItem key={index}>
              <ListIcon as={CheckIcon} color="green.500" />
              {feature}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Heading size="md">Matching Customer Stories</Heading>
        <List spacing={4} mt={2}>
          {matchingCustomerStories.map((story, index) => (
            <CustomerStory key={index} story={story} />
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Results;