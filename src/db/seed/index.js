import { customerStories } from "./customerStories.js";
import prisma from "../../lib/prisma.js";

async function deleteExistingCustomerStories() {
  console.log("Deleting existing customer stories...");
  await prisma.customerStory.deleteMany({});
  console.log("All existing customer stories deleted.");
}

async function addCustomerStory() {
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
    await deleteExistingCustomerStories();
    await addCustomerStory();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();