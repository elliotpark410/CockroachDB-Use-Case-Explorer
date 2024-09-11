const weights = {
  HIGH_AVAILABILITY: 25,
  SCALABILITY: 25,
  CONSISTENCY: 25,
  MULTI_REGION: 20,
  PERFORMANCE: 15,
  DATA_COMPLIANCE: 15,
  MULTI_CLOUD: 5,
};

const techStackBonus = {
  POSTGRES: 5,
  DOCKER: 5,
  KAFKA: 5,
  KUBERNETES: 5,
  MYSQL: 5,
};

const keyFeatures = ['HIGH_AVAILABILITY', 'SCALABILITY', 'CONSISTENCY'];

export function calculateScore(prospectData) {
  if (prospectData.dataWorkloadType === 'ANALYTICAL') {
    return 0;
  }

  let score = 0;
  let featuresSelected = 0;
  let keyFeaturesSelected = 0;

  // Key Requirements
  prospectData.keyFeatures.forEach(feature => {
    if (weights[feature]) {
      score += weights[feature];
      featuresSelected++;
      if (keyFeatures.includes(feature)) {
        keyFeaturesSelected++;
      }
    }
  });

  // Ensure minimum 80% score if at least 2 key features are selected
  if (keyFeaturesSelected >= 2) {
    score = Math.max(score, 80);
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
