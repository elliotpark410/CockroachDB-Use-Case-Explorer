const weights = {
  HIGH_AVAILABILITY: 30,
  SCALABILITY: 28,
  CONSISTENCY: 28,
  MULTI_REGION: 26,
  PERFORMANCE: 24,
  DATA_COMPLIANCE: 24,
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

  // Apply minimum scores based on features selected
  if (featuresSelected >= 4) {
    score = Math.max(score, 96);
  } else if (featuresSelected >= 3) {
    score = Math.max(score, 90);
  } else if (featuresSelected >= 2) {
    score = Math.max(score, 85);
  } else if (featuresSelected >= 1) {
    score = Math.max(score, 80);
  }

  // Query Latency
  if (prospectData.queryLatency <= 1000) {
    score += 20;
  }

  // Normalize score
  const maxScore = Object.values(weights).reduce((a, b) => a + b, 0) + 20;
  const normalizedScore = Math.round((score / maxScore) * 100);
  const finalScore = Math.min(normalizedScore, 100);

  // Ensure final score is at least 80
  const adjustedFinalScore = Math.max(finalScore, 80);

  console.log('Raw Score:', score);
  console.log('Max Score:', maxScore);
  console.log('Normalized Score:', normalizedScore);
  console.log('Final Score:', adjustedFinalScore);

  return adjustedFinalScore;
}