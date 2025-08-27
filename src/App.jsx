import { useState } from "react";
import ImageClassifier from "./components/ImageClassifier";
import recipes from "./data/recipes.json";
import { matchRecipes } from "./utils/matchRecipes";
import { normalizePredictions } from "./utils/normalize";

function App() {
  const [predictions, setPredictions] = useState([]);
  const [results, setResults] = useState([]);

  const handlePredictions = (preds) => {
    const normalized = normalizePredictions(preds);
    setPredictions(normalized);
    const matched = matchRecipes(normalized, recipes);
    setResults(matched);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🍳 Smart Recipe Generator</h1>
      <ImageClassifier onPredictions={handlePredictions} />

      <h2 className="text-xl mt-4">🔍 Detected Ingredients:</h2>
      <ul className="list-disc pl-6">
        {predictions.map((p, i) => (
          <li key={i}>
            {p.className} ({(p.probability * 100).toFixed(1)}%)
          </li>
        ))}
      </ul>

      <h2 className="text-xl mt-4">🥗 Suggested Recipes:</h2>
      {results.length === 0 ? (
        <p>No recipes yet. Try uploading an image!</p>
      ) : (
        <ul className="list-disc pl-6">
          {results.map((r) => (
            <li key={r.id}>
              <b>{r.title}</b> — Match Score: {(r.score * 100).toFixed(0)}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
