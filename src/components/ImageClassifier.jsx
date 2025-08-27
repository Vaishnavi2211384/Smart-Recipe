import { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

function ImageClassifier({ onPredictions }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [model, setModel] = useState(null);

  // Load model when first needed
  const loadModel = async () => {
    if (!model) {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      return loadedModel;
    }
    return model;
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);

    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.onload = async () => {
      const loadedModel = await loadModel();
      const preds = await loadedModel.classify(imgElement);
      onPredictions(preds);
    };
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-2"
      />
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" className="w-64 rounded shadow" />
      )}
    </div>
  );
}

export default ImageClassifier;
