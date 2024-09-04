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

  // Select the top 2 matches
  const bestMatches = scoredStories.slice(0, 2);

  if (bestMatches.length === 0) {
    // If still no matches, return a generic story
    return [{
      companyName: 'Route (Generic Company)',
      industry: 'Logistics & Shipping',
      cloudProvider: CloudProvider.AWS,
      techStack: [TechStack.POSTGRES],
      useCase: 'Real-time data store for order management, package tracking, and shipping protection across billions of e-commerce orders',
      keyFeatures: selectedFeatures,
      solution: 'Implemented CockroachDB as their central database for their order management platform, leveraging its scalability, high availability, and ability to handle over a billion records with zero downtime".',
      challenge: 'Scaling order, shipment, and tracking data into the billions while maintaining high availability and performance, especially during peak seasons like Black Friday',
      matchScore: 1,
    }];
  }

  return bestMatches;
}