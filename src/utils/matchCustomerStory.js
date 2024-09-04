import { TechStack, CloudProvider, Features } from "@prisma/client";
import prisma from "../lib/prisma.js"

export async function matchCustomerStory(prospectData) {
  const selectedFeatures = prospectData.keyFeatures || [];

  // Query to find customer stories that have all the selected features
  const matchedStories = await prisma.customerStory.findMany({
    where: {
      keyFeatures: {
        hasEvery: selectedFeatures
      }
    },
    take: 2 // Limit to 2 matching stories
  });

  if (matchedStories.length === 0) {
    // If no exact matches, try to find stories with at least one matching feature
    const partialMatches = await prisma.customerStory.findMany({
      where: {
        keyFeatures: {
          hasSome: selectedFeatures
        }
      },
      take: 2
    });

    if (partialMatches.length > 0) {
      return partialMatches;
    }

    // If still no matches, return a generic story
    return [{
      companyName: 'Route',
      industry: 'Logistics & Shipping',
      cloudProvider: CloudProvider.AWS,
      techStack: [TechStack.POSTGRES],
      useCase: 'Real-time data store for order management, package tracking, and shipping protection across billions of e-commerce orders',
      keyFeatures: selectedFeatures,
      solution: 'Implemented CockroachDB as their central database for their order management platform, leveraging its scalability, high availability, and ability to handle over a billion records with zero downtime".',
      challenge: 'Scaling order, shipment, and tracking data into the billions while maintaining high availability and performance, especially during peak seasons like Black Friday',

    }];
  }

  return matchedStories;
}