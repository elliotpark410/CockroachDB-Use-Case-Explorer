import prisma from '../../db/prisma.js';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      return id ? getProspect(res, id) : getProspects(res);
    case 'POST':
      return createProspect(req, res);
    case 'PUT':
      return updateProspect(req, res, id);
    case 'DELETE':
      return deleteProspect(res, id);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function getProspects(res) {
  try {
    const prospects = await prisma.prospect.findMany();
    res.status(200).json(prospects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProspect(res, id) {
  try {
    const prospect = await prisma.prospect.findUnique({ where: { id } });
    if (!prospect) {
      return res.status(404).json({ error: 'Prospect not found' });
    }
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createProspect(req, res) {
  try {
    const prospect = await prisma.prospect.create({ data: req.body });
    res.status(201).json(prospect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProspect(req, res, id) {
  try {
    const prospect = await prisma.prospect.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteProspect(res, id) {
  try {
    await prisma.prospect.delete({ where: { id } });
    res.status(200).json({ message: 'Prospect deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}