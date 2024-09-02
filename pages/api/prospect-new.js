import prisma from '../../db/prisma';
import { calculateScore, getScoreCategory, getScoreExplanation } from '../../util/scoring';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const prospectData = req.body;

      // Create new prospect
      const prospect = await prisma.prospect.create({
        data: prospectData,
      });

      // Calculate score and get explanation
      const score = calculateScore(prospectData);
      const category = getScoreCategory(score);
      const explanation = getScoreExplanation(score, prospectData);

      // Determine helpful features
      const helpfulFeatures = determineHelpfulFeatures(prospectData);

      // Find matching customer stories
      const matchingCustomerStories = await findMatchingCustomerStories(prospectData);

      // Create result
      const result = await prisma.result.create({
        data: {
          prospectId: prospect.id,
          score,
          helpfulFeatures,
          matchingCustomerStories: {
            connect: matchingCustomerStories.map(story => ({ id: story.id }))
          }
        },
      });

      res.status(200).json({
        score,
        category,
        explanation,
        helpfulFeatures,
        matchingCustomerStories
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function determineHelpfulFeatures(prospectData) {
  const features = [];
  if (prospectData.scalability) features.push('Scalability');
  if (prospectData.consistency) features.push('Strong consistency');
  if (prospectData.multiRegion) features.push('Multi-region support');
  if (prospectData.dataLocality) features.push('Data locality');
  if (prospectData.dataCompliance) features.push('Data compliance and governance');
  if (prospectData.highAvailability) features.push('High availability');
  if (prospectData.faultTolerance) features.push('Fault tolerance');
  if (prospectData.performance) features.push('High performance');

  // Add more features based on other inputs
  if (prospectData.cloudProvider === 'MULTI_CLOUD' || prospectData.cloudProvider === 'HYBRID') {
    features.push('Multi-cloud deployment');
  }
  if (prospectData.dataWorkloadType === 'HYBRID') {
    features.push('Support for hybrid transactional/analytical processing (HTAP)');
  }

  return features;
}

async function findMatchingCustomerStories(prospectData) {
  return await prisma.customerStory.findMany({
    where: {
      OR: [
        { industry: prospectData.industry },
        { cloudProvider: prospectData.cloudProvider },
        { previousDatabase: { hasSome: prospectData.currentDatabase } },
        { technicalChallenge: { hasSome: Object.keys(prospectData).filter(key => prospectData[key] === true) } }
      ],
    },
    take: 3, // Limit to 3 matching stories
  });
}