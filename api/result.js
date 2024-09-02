import prisma from '../db/prisma.js';

export const createResult = async (req, res) => {
  try {
    const result = await prisma.result.create({
      data: req.body,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getResults = async (req, res) => {
  try {
    const results = await prisma.result.findMany();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getResult = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.result.findUnique({
      where: { id },
    });
    if (!result) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.result.update({
      where: { id },
      data: req.body,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.result.delete({
      where: { id },
    });
    res.json({ message: 'Result deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
