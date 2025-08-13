function calculateHealthScore(candidate, medicalExam, scoringGuide) {
  let score = 0;
  let healthLevel = 0;

  // ...calculate a lot of things
}

// |
// v

class HealthScorer {
  #candidate;
  #medicalExam;
  #scoringGuide;

  #result;
  #healthLevel;

  constructor(candidate, medicalExam, scoringGuide) {
    this.#candidate = candidate;
    this.#medicalExam = medicalExam;
    this.#scoringGuide = scoringGuide;
  }

  execute() {
    this.#result = 0;
    this.#healthLevel = 0;

    // ...calculate a lot of things
  }
}
