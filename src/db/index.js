import prisma from '../lib/prisma.js'

async function listDatabases() {
  const result = await prisma.$queryRaw`
    SELECT datname FROM pg_database WHERE datistemplate = false;
  `;
  console.log("Databases:");
  console.log(result.map(row => row.datname));
}

async function showTables() {
  const result = await prisma.$queryRaw`
    SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
  `;
  console.log("Tables:");
  console.log(result.map(row => row.table_name));
}


async function fetchProspectData() {
  // Fetch all prospects
  const allProspects = await prisma.prospect.findMany()
  console.log('All prospects:', allProspects)
}

  async function main() {
  try {
    // await listDatabases();
    // await showTables();
    // await fetchProspectData();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();