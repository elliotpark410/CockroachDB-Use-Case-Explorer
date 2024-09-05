const weights = {
  HIGH_AVAILABILITY: 25,
  SCALABILITY: 25,
  CONSISTENCY: 20,
  MULTI_REGION: 15,
  PERFORMANCE: 15,
  DATA_COMPLIANCE: 15,
  MULTI_CLOUD: 15,
};

const techStackBonus = {
  POSTGRES: 5,
  DOCKER: 4,
  KAFKA: 3,
  MYSQL: 3,
};

export function calculateScore(prospectData) {
  if (prospectData.dataWorkloadType === 'ANALYTICAL') {
    return 0;
  }

  let score = 0;
  let featuresSelected = 0;

  // Key Requirements
  prospectData.keyFeatures.forEach(feature => {
    if (weights[feature]) {
      score += weights[feature];
      featuresSelected++;
    }
  });

  // Query Latency
  if (prospectData.queryLatency <= 1000) {
    score += 5;
  }

  // Tech Stack Bonus
  prospectData.techStack.forEach(tech => {
    if (techStackBonus[tech]) {
      score += techStackBonus[tech];
    }
  });

  // Ensure final score is between 0 and 99
  const finalScore = Math.min(Math.max(score, 0), 99);

  return finalScore;
}
