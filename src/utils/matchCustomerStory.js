import { TechStack, CloudProvider, Features } from "@prisma/client";
import prisma from "../lib/prisma.js";

export async function matchCustomerStory(prospectData) {
  const selectedFeatures = prospectData.keyFeatures || [];

  // Fetch all customer stories
  const allStories = await prisma.customerStory.findMany();

  // Calculate match score for each story
  const scoredStories = allStories.map(story => {
    const matchingFeatures = story.keyFeatures.filter(feature =>
      selectedFeatures.includes(feature)
    );
    const score = (matchingFeatures.length / selectedFeatures.length) * 100;
    return { ...story, matchScore: score };
  });

  // Sort stories by match score (descending)
  scoredStories.sort((a, b) => b.matchScore - a.matchScore);

   // Find all stories with the highest match score
   const highestScore = scoredStories[0].matchScore;
   const topMatches = scoredStories.filter(story => story.matchScore === highestScore);

   let bestMatches;

   if (topMatches.length > 2) {
     // Randomly select 2 stories from the top matches
     bestMatches = [];
     const indexes = new Set();
     while (indexes.size < 2) {
       indexes.add(Math.floor(Math.random() * topMatches.length));
     }
     for (let index of indexes) {
       bestMatches.push(topMatches[index]);
     }
   } else {
     // If there are 2 or fewer top matches, use all of them
     bestMatches = topMatches;
   }

  if (bestMatches.length === 0) {
    // If still no matches, return a generic story
    return [{
      companyName: 'DoorDash',
      industry: 'Food Delivery',
      cloudProvider: CloudProvider.MULTI_CLOUD,
      techStack: [TechStack.AURORA],
      useCase: 'Needed a fault-tolerant and scalable distributed database that will not fail during peak seasons',
      challenge: 'Aurora was not able to scale during peak business days',
      solution: 'Manages over 300 CockroachDB clusters, handling millions of queries per second and petabytes of data',
      keyFeatures: [
      Features.SCALABILITY,
      Features.HIGH_AVAILABILITY,
      Features.PERFORMANCE,
      Features.CONSISTENCY,
      Features.MULTI_REGION
    ],
      matchScore: 1,
    }];
  }

  return bestMatches;
}