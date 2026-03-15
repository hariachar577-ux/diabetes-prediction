const rawDataset = [
  [6, 148, 72, 35, 0, 33.6, 0.627, 50, 1],
  [1, 85, 66, 29, 0, 26.6, 0.351, 31, 0],
  [8, 183, 64, 0, 0, 23.3, 0.672, 32, 1],
  [1, 89, 66, 23, 94, 28.1, 0.167, 21, 0],
  [0, 137, 40, 35, 168, 43.1, 2.288, 33, 1],
  [5, 116, 74, 0, 0, 25.6, 0.201, 30, 0],
  [3, 78, 50, 32, 88, 31.0, 0.248, 26, 1],
  [10, 115, 0, 0, 0, 35.3, 0.134, 29, 0],
  [2, 197, 70, 45, 543, 30.5, 0.158, 53, 1],
  [8, 125, 96, 0, 0, 0.0, 0.232, 54, 1],
  [4, 110, 92, 0, 0, 37.6, 0.191, 30, 0],
  [10, 168, 74, 0, 0, 38.0, 0.537, 34, 1],
  [10, 139, 80, 0, 0, 27.1, 1.441, 57, 0],
  [1, 189, 60, 23, 846, 30.1, 0.398, 59, 1],
  [5, 166, 72, 19, 175, 25.8, 0.587, 51, 1],
  [7, 100, 0, 0, 0, 30.0, 0.484, 32, 1],
  [0, 118, 84, 47, 230, 45.8, 0.551, 31, 1],
  [7, 107, 74, 0, 0, 29.6, 0.254, 31, 1],
  [1, 103, 30, 38, 83, 43.3, 0.183, 33, 0],
  [1, 115, 70, 30, 96, 34.6, 0.529, 32, 1],
  [3, 126, 88, 41, 235, 39.3, 0.704, 27, 0],
  [8, 99, 84, 0, 0, 35.4, 0.388, 50, 0],
  [7, 196, 90, 0, 0, 39.8, 0.451, 41, 1],
  [9, 119, 80, 35, 0, 29.0, 0.263, 29, 1],
  [11, 143, 94, 33, 146, 36.6, 0.254, 51, 1],
  [10, 125, 70, 26, 115, 31.1, 0.205, 41, 1],
  [7, 147, 76, 0, 0, 39.4, 0.257, 43, 1],
  [1, 97, 66, 15, 140, 23.2, 0.487, 22, 0],
  [13, 145, 82, 19, 110, 22.2, 0.245, 57, 0],
  [5, 117, 92, 0, 0, 34.1, 0.337, 38, 0],
  [5, 109, 75, 26, 0, 36.0, 0.546, 60, 0],
  [3, 158, 76, 36, 245, 31.6, 0.851, 28, 1],
  [3, 88, 58, 11, 54, 24.8, 0.267, 22, 0],
  [6, 92, 92, 0, 0, 19.9, 0.188, 28, 0],
  [10, 122, 78, 31, 0, 27.6, 0.512, 45, 0],
  [4, 103, 60, 33, 192, 24.0, 0.966, 33, 0],
  [11, 138, 76, 0, 0, 33.2, 0.42, 35, 0],
  [9, 102, 76, 37, 0, 32.9, 0.665, 46, 1],
  [2, 90, 68, 42, 0, 38.2, 0.503, 27, 1],
  [4, 111, 72, 47, 207, 37.1, 1.39, 56, 1],
  [3, 180, 64, 25, 70, 34.0, 0.271, 26, 0],
  [7, 133, 84, 0, 0, 40.2, 0.696, 37, 0],
  [7, 106, 92, 18, 0, 22.7, 0.235, 48, 0],
  [9, 171, 110, 24, 240, 45.4, 0.721, 54, 1],
  [7, 159, 64, 0, 0, 27.4, 0.294, 40, 0],
  [0, 180, 66, 39, 0, 42.0, 1.893, 25, 1],
  [1, 146, 56, 0, 0, 29.7, 0.564, 29, 0],
  [2, 71, 70, 27, 0, 28.0, 0.586, 22, 0],
  [7, 103, 66, 32, 0, 39.1, 0.344, 31, 1],
  [7, 105, 0, 0, 0, 0.0, 0.305, 24, 0],
  [1, 103, 80, 11, 82, 19.4, 0.491, 22, 0],
  [1, 101, 50, 15, 36, 24.2, 0.526, 26, 0],
  [5, 88, 66, 21, 23, 24.4, 0.342, 30, 0],
  [8, 176, 90, 34, 300, 33.7, 0.467, 58, 1],
  [7, 150, 66, 42, 342, 34.7, 0.718, 42, 0],
  [1, 73, 50, 10, 0, 23.0, 0.248, 21, 0],
  [7, 187, 68, 39, 304, 37.7, 0.254, 41, 1],
  [0, 100, 88, 60, 110, 46.8, 0.962, 31, 0],
  [0, 146, 82, 0, 0, 40.5, 1.781, 44, 0],
  [0, 105, 64, 41, 142, 41.5, 0.173, 22, 0],
  [2, 84, 0, 0, 0, 0.0, 0.304, 21, 0]
];

const featureNames = [
  "Pregnancies",
  "Glucose",
  "Blood Pressure",
  "Skin Thickness",
  "Insulin",
  "BMI",
  "Pedigree Function",
  "Age"
];

const form = document.getElementById("predictionForm");
const riskScore = document.getElementById("riskScore");
const riskLevel = document.getElementById("riskLevel");
const resultSummary = document.getElementById("resultSummary");
const topDrivers = document.getElementById("topDrivers");
const topProtective = document.getElementById("topProtective");

let model = null;

function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function std(values, avg) {
  const variance = values.reduce((sum, value) => sum + (value - avg) ** 2, 0) / values.length;
  return Math.sqrt(variance) || 1;
}

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

function trainLogisticRegression(dataset, learningRate = 0.12, epochs = 5000) {
  const featureCount = dataset[0].length - 1;
  const features = dataset.map((row) => row.slice(0, featureCount));
  const labels = dataset.map((row) => row[featureCount]);

  const means = [];
  const stds = [];

  for (let index = 0; index < featureCount; index += 1) {
    const column = features.map((row) => row[index]);
    const avg = mean(column);
    means.push(avg);
    stds.push(std(column, avg));
  }

  const normalized = features.map((row) =>
    row.map((value, index) => (value - means[index]) / stds[index])
  );

  const weights = new Array(featureCount).fill(0);
  let bias = 0;

  for (let epoch = 0; epoch < epochs; epoch += 1) {
    const weightGradients = new Array(featureCount).fill(0);
    let biasGradient = 0;

    for (let rowIndex = 0; rowIndex < normalized.length; rowIndex += 1) {
      const row = normalized[rowIndex];
      const actual = labels[rowIndex];
      const z = row.reduce((sum, value, index) => sum + value * weights[index], bias);
      const prediction = sigmoid(z);
      const error = prediction - actual;

      for (let index = 0; index < featureCount; index += 1) {
        weightGradients[index] += error * row[index];
      }

      biasGradient += error;
    }

    for (let index = 0; index < featureCount; index += 1) {
      weights[index] -= (learningRate * weightGradients[index]) / normalized.length;
    }

    bias -= (learningRate * biasGradient) / normalized.length;
  }

  let correct = 0;
  for (let rowIndex = 0; rowIndex < normalized.length; rowIndex += 1) {
    const row = normalized[rowIndex];
    const z = row.reduce((sum, value, index) => sum + value * weights[index], bias);
    const prediction = sigmoid(z) >= 0.5 ? 1 : 0;
    if (prediction === labels[rowIndex]) {
      correct += 1;
    }
  }

  return {
    weights,
    bias,
    means,
    stds,
    accuracy: correct / normalized.length,
    sampleCount: dataset.length,
    featureCount
  };
}

function predict(features) {
  const normalized = features.map((value, index) => (value - model.means[index]) / model.stds[index]);
  const logit = normalized.reduce((sum, value, index) => sum + value * model.weights[index], model.bias);
  const probability = sigmoid(logit);
  const contributions = normalized.map((value, index) => ({
    name: featureNames[index],
    impact: value * model.weights[index]
  }));

  contributions.sort((left, right) => right.impact - left.impact);

  return { probability, contributions };
}

function getRiskBand(probability) {
  if (probability < 0.35) {
    return { label: "Low risk range", className: "low" };
  }
  if (probability < 0.65) {
    return { label: "Moderate risk range", className: "moderate" };
  }
  return { label: "High risk range", className: "high" };
}

function formatContributionList(items, fallbackText) {
  const filtered = items.filter((item) => Math.abs(item.impact) > 0.01).slice(0, 3);
  if (!filtered.length) {
    return fallbackText;
  }

  return filtered
    .map((item) => `${item.name} (${item.impact > 0 ? "+" : ""}${item.impact.toFixed(2)})`)
    .join(", ");
}

function updateModelSnapshot() {
  document.getElementById("modelName").textContent = "Logistic Regression";
  document.getElementById("sampleCount").textContent = String(model.sampleCount);
  document.getElementById("featureCount").textContent = String(model.featureCount);
  document.getElementById("trainingAccuracy").textContent = `${(model.accuracy * 100).toFixed(1)}%`;
}

function handlePrediction(event) {
  event.preventDefault();

  const featureValues = [
    Number(document.getElementById("pregnancies").value),
    Number(document.getElementById("glucose").value),
    Number(document.getElementById("bloodPressure").value),
    Number(document.getElementById("skinThickness").value),
    Number(document.getElementById("insulin").value),
    Number(document.getElementById("bmi").value),
    Number(document.getElementById("dpf").value),
    Number(document.getElementById("age").value)
  ];

  const { probability, contributions } = predict(featureValues);
  const positiveDrivers = contributions.filter((item) => item.impact > 0);
  const stabilizers = [...contributions].reverse().filter((item) => item.impact < 0);
  const band = getRiskBand(probability);
  const percent = probability * 100;

  riskScore.textContent = `${percent.toFixed(1)}%`;
  riskLevel.textContent = band.label;
  riskLevel.className = `risk-pill ${band.className}`;
  resultSummary.textContent =
    percent >= 65
      ? "The model sees a strong diabetes signal in this profile. Higher glucose, BMI, pedigree score, or age may be pushing the estimate upward."
      : percent >= 35
        ? "The model sees a mixed picture. Some indicators are elevated, but the total profile is not overwhelmingly high risk."
        : "The model sees a lower-risk profile relative to the training data, though this should still be interpreted carefully.";
  topDrivers.textContent = formatContributionList(positiveDrivers, "No major upward drivers were detected.");
  topProtective.textContent = formatContributionList(stabilizers, "No meaningful stabilizing signals were detected.");
}

function initialize() {
  model = trainLogisticRegression(rawDataset);
  updateModelSnapshot();
  form.addEventListener("submit", handlePrediction);
  handlePrediction({ preventDefault() {} });
}

initialize();
