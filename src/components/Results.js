import React from 'react';
import { Box, VStack, Heading, Text, List, ListItem, Badge, SimpleGrid } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const CustomerStory = ({ story }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
    <Heading size="md">{story.companyName}</Heading>
    <Badge colorScheme="blue" mt={2}>{story.industry}</Badge>
    <Text mt={2}><strong>Use Case:</strong> {story.useCase}</Text>
    <Text mt={2}><strong>Challenge:</strong> {story.challenge}</Text>
    <Text mt={2}><strong>Solution:</strong> {story.solution}</Text>
    <SimpleGrid columns={2} spacing={2} mt={2}>
      {story.keyFeatures.map((feature, index) => (
        <Badge key={index} colorScheme="green">
          <CheckIcon mr={1} />
          {feature.replace('_', ' ')}
        </Badge>
      ))}
    </SimpleGrid>
  </Box>
);

const Results = ({ data }) => {
  const { score, matchedStories } = data;

  console.log(matchedStories)

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Heading size="lg">CockroachDB Fit Score</Heading>
        <Text fontSize="4xl" fontWeight="bold" color={score > 70 ? "green.500" : score > 40 ? "yellow.500" : "red.500"}>
          {score}%
        </Text>
      </Box>

      <Box>
        <Heading size="md">Matching Customer Stories</Heading>
        <List spacing={4} mt={2}>
          {matchedStories.map((story, index) => (
            <ListItem key={index}>
              <CustomerStory story={story} />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Results;