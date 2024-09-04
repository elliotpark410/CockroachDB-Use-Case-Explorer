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
    console.log('Disqualified due to ANALYTICAL workload');
    return 0;
  }

  let score = 0;
  let featuresSelected = 0;

  // Key Requirements
  prospectData.keyFeatures.forEach(feature => {
    if (weights[feature]) {
      score += weights[feature];
      featuresSelected++;
      console.log(`Added ${weights[feature]} for ${feature}`);
    }
  });

  // Query Latency
  if (prospectData.queryLatency <= 1000) {
    score += 5;
    console.log('Added 5 for query latency of 1 second or less');
  }

  // Tech Stack Bonus
  prospectData.techStack.forEach(tech => {
    if (techStackBonus[tech]) {
      score += techStackBonus[tech];
      console.log(`Added ${techStackBonus[tech]} for ${tech} in tech stack`);
    }
  });

  // Ensure final score is between 0 and 100
  const finalScore = Math.min(Math.max(score, 0), 100);

  console.log('Features Selected:', featuresSelected);
  console.log('Final Score:', finalScore);

  return finalScore;
}

const prospectData = {
  dataWorkloadType: 'TRANSACTIONAL',
  keyFeatures: ['SCALABILITY', 'DATA_COMPLIANCE', 'MULTI_CLOUD', 'CONSISTENCY'],
  queryLatency: 125,
  techStack: ['MYSQL', 'POSTGRES']
};

const result = calculateScore(prospectData);
console.log('Result:', result);
