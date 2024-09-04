import React from 'react';
import { Box, VStack, Heading, Text, List, ListItem, Badge, SimpleGrid, Flex, Circle } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const CustomerStory = ({ story }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    mb={4}
    boxShadow="md"
    bg="white"
    transition="all 0.3s"
    _hover={{ boxShadow: "lg" }}
  >
    <Heading size="md" mb={2} color="blue.600">{story.companyName}</Heading>
    <Badge colorScheme="blue" mb={3}>{story.industry}</Badge>
    <Text mt={2} fontSize="sm"><strong>Use Case:</strong> {story.useCase}</Text>
    <Text mt={2} fontSize="sm"><strong>Challenge:</strong> {story.challenge}</Text>
    <Text mt={2} fontSize="sm"><strong>Solution:</strong> {story.solution}</Text>
    <SimpleGrid columns={[2, 3, 4]} spacing={2} mt={4}>
      {story.keyFeatures.map((feature, index) => (
        <Badge key={index} colorScheme="green" variant="subtle" borderRadius="full" px={3} py={1}>
          <Flex align="center">
            <CheckIcon mr={1} boxSize={3} />
            <Text fontSize="xs">{feature.replace('_', ' ')}</Text>
          </Flex>
        </Badge>
      ))}
    </SimpleGrid>
  </Box>
);

const Results = ({ data }) => {
  const { fitScore, customerStories } = data;

  const getFitScoreColor = (score) => {
    if (score > 70) return "green";
    if (score > 40) return "yellow";
    return "red";
  };

  return (
    <Box maxW="4xl" mx="auto" bg="white" boxShadow="xl" rounded="lg" overflow="hidden">
      <VStack spacing={8} align="stretch" p={8}>
        <Box>
          <Heading size="md" mb={4} textAlign="center">CockroachDB Fit Score</Heading>
          <Flex justifyContent="center" alignItems="center">
            <Circle
              size="150px"
              bg={`${getFitScoreColor(fitScore)}.100`}
              borderWidth={8}
              borderColor={`${getFitScoreColor(fitScore)}.500`}
            >
              <Text fontSize="4xl" fontWeight="bold" color={`${getFitScoreColor(fitScore)}.500`}>
                {fitScore}%
              </Text>
            </Circle>
          </Flex>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Matching Customer Stories</Heading>
          <List spacing={6}>
            {customerStories.map((story, index) => (
              <ListItem key={index}>
                <CustomerStory story={story} />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  );
};

export default Results;