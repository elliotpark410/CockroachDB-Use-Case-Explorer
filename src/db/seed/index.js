import { customerStories } from "./customerStories.js";
import prisma from "../../lib/prisma.js";

async function customerStory() {
  console.log(`Start seeding ...`);
  for (const story of customerStories) {
    const customerStory = await prisma.customerStory.create({
      data: story,
    });
    console.log(`Created customer story with id: ${customerStory.id}`);
  }
  console.log(`Seeding finished.`);
}

async function main() {
  try {
    await customerStory();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();