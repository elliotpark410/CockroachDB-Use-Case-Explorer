import prisma from '../db/prisma.js';

export const createProspect = async (req, res) => {
  try {
    const prospect = await prisma.prospect.create({
      data: req.body,
    });
    res.json(prospect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProspects = async (req, res) => {
  try {
    const prospects = await prisma.prospect.findMany();
    res.json(prospects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProspect = async (req, res) => {
  try {
    const { id } = req.params;
    const prospect = await prisma.prospect.findUnique({
      where: { id },
    });
    if (!prospect) {
      return res.status(404).json({ error: 'Prospect not found' });
    }
    res.json(prospect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProspect = async (req, res) => {
  try {
    const { id } = req.params;
    const prospect = await prisma.prospect.update({
      where: { id },
      data: req.body,
    });
    res.json(prospect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProspect = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.prospect.delete({
      where: { id },
    });
    res.json({ message: 'Prospect deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
