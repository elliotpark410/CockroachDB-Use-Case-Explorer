import { PrismaClient } from '@prisma/client';
import { matchCustomerStory } from '../../utils/matchCustomerStory';
import { calculateScore, getScoreExplanation } from '../../utils/calculateScore';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const prospectData = req.body;

      // Save prospect data
      const prospect = await prisma.prospect.create({
        data: prospectData,
      });

      // Match customer story
      const customerStory = await matchCustomerStory(prospectData);

      // Calculate fit score
      const fitScore = calculateScore(prospectData);

      // Get score explanation
      const scoreExplanation = getScoreExplanation(fitScore, prospectData);

      res.status(200).json({ prospect, customerStory, fitScore, scoreExplanation });
    } catch (error) {
      console.error('Error processing prospect data:', error);
      res.status(500).json({ error: 'Error processing prospect data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}