import prisma from '../../db/prisma.js';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      return id ? getResult(res, id) : getResults(res);
    case 'POST':
      return createResult(req, res);
    case 'PUT':
      return updateResult(req, res, id);
    case 'DELETE':
      return deleteResult(res, id);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function getResults(res) {
  try {
    const results = await prisma.result.findMany();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getResult(res, id) {
  try {
    const result = await prisma.result.findUnique({ where: { id } });
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createResult(req, res) {
  try {
    const result = await prisma.result.create({ data: req.body });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateResult(req, res, id) {
  try {
    const result = await prisma.result.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteResult(res, id) {
  try {
    await prisma.result.delete({ where: { id } });
    res.status(200).json({ message: 'Result deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}