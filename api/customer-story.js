import prisma from '../db/prisma.js';

export const createCustomerStory = async (req, res) => {
  try {
    const customerStory = await prisma.customerStory.create({
      data: req.body,
    });
    res.json(customerStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCustomerStories = async (req, res) => {
  try {
    const customerStories = await prisma.customerStory.findMany();
    res.json(customerStories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCustomerStory = async (req, res) => {
  try {
    const { id } = req.params;
    const customerStory = await prisma.customerStory.findUnique({
      where: { id },
    });
    if (!customerStory) {
      return res.status(404).json({ error: 'Customer Story not found' });
    }
    res.json(customerStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCustomerStory = async (req, res) => {
  try {
    const { id } = req.params;
    const customerStory = await prisma.customerStory.update({
      where: { id },
      data: req.body,
    });
    res.json(customerStory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCustomerStory = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.customerStory.delete({
      where: { id },
    });
    res.json({ message: 'Customer Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
