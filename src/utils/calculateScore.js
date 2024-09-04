// Scoring weights
const weights = {
  dataWorkloadType: 15,
  cloudProvider: 10,
  isNewApp: 5,
  scalability: 10,
  consistency: 10,
  multiRegion: 10,
  dataLocality: 5,
  dataCompliance: 5,
  highAvailability: 10,
  faultTolerance: 10,
  performance: 10
};

export function calculateScore(prospectData) {
  let score = 0;

  // Data Workload Type
  if (prospectData.dataWorkloadType === 'TRANSACTIONAL' || prospectData.dataWorkloadType === 'HYBRID') {
    score += weights.dataWorkloadType;
  }

  // Cloud Provider
  if (prospectData.cloudProvider === 'MULTI_CLOUD' || prospectData.cloudProvider === 'HYBRID') {
    score += weights.cloudProvider;
  }

  // New Application
  if (prospectData.isNewApp) {
    score += weights.isNewApp;
  }

  // Key Requirements
  if (prospectData.scalability) score += weights.scalability;
  if (prospectData.consistency) score += weights.consistency;
  if (prospectData.multiRegion) score += weights.multiRegion;
  if (prospectData.dataLocality) score += weights.dataLocality;
  if (prospectData.dataCompliance) score += weights.dataCompliance;
  if (prospectData.highAvailability) score += weights.highAvailability;
  if (prospectData.faultTolerance) score += weights.faultTolerance;
  if (prospectData.performance) score += weights.performance;

  // Query Latency
  if (prospectData.queryLatency <= 10) {
    score += 5;
  } else if (prospectData.queryLatency <= 50) {
    score += 3;
  }

  // Data Volume
  if (prospectData.dataVolume === '1TB-10TB' || prospectData.dataVolume === '10TB+') {
    score += 5;
  }

  // Normalize score to percentage
  const maxScore = Object.values(weights).reduce((a, b) => a + b, 0) + 10; // +10 for query latency and data volume
  const normalizedScore = Math.round((score / maxScore) * 100);

  return Math.min(normalizedScore, 100); // Ensure score doesn't exceed 100
}
