import prisma from '../../db/prisma.js';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      return id ? getCustomerStory(res, id) : getCustomerStories(res);
    case 'POST':
      return createCustomerStory(req, res);
    case 'PUT':
      return updateCustomerStory(req, res, id);
    case 'DELETE':
      return deleteCustomerStory(res, id);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function getCustomerStories(res) {
  try {
    const customerStories = await prisma.customerStory.findMany();
    res.status(200).json(customerStories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCustomerStory(res, id) {
  try {
    const customerStory = await prisma.customerStory.findUnique({ where: { id } });
    if (!customerStory) {
      return res.status(404).json({ error: 'Customer Story not found' });
    }
    res.status(200).json(customerStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createCustomerStory(req, res) {
  try {
    const customerStory = await prisma.customerStory.create({ data: req.body });
    res.status(201).json(customerStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateCustomerStory(req, res, id) {
  try {
    const customerStory = await prisma.customerStory.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json(customerStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteCustomerStory(res, id) {
  try {
    await prisma.customerStory.delete({ where: { id } });
    res.status(200).json({ message: 'Customer Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}