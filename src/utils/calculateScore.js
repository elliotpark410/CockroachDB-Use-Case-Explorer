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

export function getScoreExplanation(score, prospectData) {
  let explanation = `Based on your input, CockroachDB appears to be a ${getScoreCategory(score)} for your use case. `;

  if (score >= 80) {
    explanation += "CockroachDB's features align very well with your requirements, particularly in areas like ";
  } else if (score >= 60) {
    explanation += "CockroachDB offers strong capabilities that match many of your needs, especially in ";
  } else if (score >= 40) {
    explanation += "While CockroachDB may meet some of your requirements, there might be areas where it's not the perfect fit. It's strongest in ";
  } else {
    explanation += "Although CockroachDB might not be the ideal solution for all your needs, it does offer some benefits in areas like ";
  }

  const strengths = [];
  if (prospectData.scalability) strengths.push("scalability");
  if (prospectData.consistency) strengths.push("consistency");
  if (prospectData.multiRegion) strengths.push("multi-region support");
  if (prospectData.highAvailability) strengths.push("high availability");
  if (prospectData.faultTolerance) strengths.push("fault tolerance");
  if (prospectData.performance) strengths.push("performance");

  explanation += strengths.slice(0, 3).join(", ") + ".";

  return explanation;
}