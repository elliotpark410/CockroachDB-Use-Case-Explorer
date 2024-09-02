import prisma from './prisma.js'

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

async function addNewProspect() {
  // Create a new prospect
  const newProspect = await prisma.prospect.create({
    data: {
      contactName: 'Elliot Park',
      email: 'elliot@jagad.to',
      companyName: 'Jagad',
      industry: 'fintech',
      role: 'account executive',
      dataWorkloadType: 'HYBRID',
      cloudProvider: 'AWS',
      currentDatabase: ['POSTGRES', 'REDIS'],
      isNewApp: true,
      scalability: true,
      consistency: true,
      multiRegion: false,
      dataLocality: true,
      dataCompliance: false,
      highAvailability: true,
      faultTolerance: true,
      performance: true,
      queryLatency: 10,
      additionalNotes: 'Looking for a highly scalable and available database solution.',
      timeline: 'Q4 2024',
      dataVolume: '1TB - 10TB',
    },
  })
  console.log('New prospect created:', newProspect)
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
    // await addNewProspect();
    await fetchProspectData();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();