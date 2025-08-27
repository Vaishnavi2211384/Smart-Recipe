export function normalizePredictions(preds) {
  return preds.map((p) => ({
    className: p.className.toLowerCase(),
    probability: p.probability,
  }));
}
