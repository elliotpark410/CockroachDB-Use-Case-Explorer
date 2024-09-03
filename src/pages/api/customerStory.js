import prisma from '../../db/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const customerStories = await prisma.customerStory.findMany();
      res.status(200).json(customerStories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}