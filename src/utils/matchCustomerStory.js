import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function matchCustomerStory(prospectData) {
  // This is a simplified matching logic. You may want to implement a more sophisticated algorithm.
  const matchedStory = await prisma.customerStory.findFirst({
    where: {
      industryType: prospectData.industryType,
    },
  });

  return matchedStory || { title: 'Generic CockroachDB Success Story', description: 'CockroachDB has helped many businesses achieve their goals.' };
}