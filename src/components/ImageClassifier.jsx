import { useEffect, useRef, useState } from "react";

// lazy-load TF & model only when component mounts
export default function ImageClassifier({ onDetect }) {
  const [busy, setBusy] = useState(false);
  const [labels, setLabels] = useState([]);
  const fileRef = useRef();

  // mapping from MobileNet labels to ingredients
  const labelMap = {
    tomato: ["tomato"],
    cheese: ["cheese", "cheddar", "parmesan"],
    bread: ["bagel", "loaf", "bread"],
    egg: ["egg"],
    onion: ["onion"],
    garlic: ["garlic"],
    potato: ["potato"],
    carrot: ["carrot"],
    broccoli: ["broccoli"],
    pepper: ["bell pepper", "pepper"],
    banana: ["banana"],
    apple: ["apple"],
    milk: ["milk"],
    butter: ["butter", "margarine"],
    pasta: ["pasta", "spaghetti", "noodle"],
    rice: ["rice"],
    chicken: ["chicken"],
    fish: ["fish", "salmon", "tuna"],
    yogurt: ["yogurt"],
    spinach: ["spinach"],
  };

  const handleFile = async (file) => {
    if (!file) return;
    setBusy(true);
    try {
      // dynamic imports so the bundle stays small
      const tf = await import("@tensorflow/tfjs");
      const mobilenet = await import("@tensorflow-models/mobilenet");

      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      await new Promise((res) => (img.onload = res));

      const model = await mobilenet.load();
      const preds = await model.classify(img, 5);
      const found = new Set();

      preds.forEach((p) => {
        const label = p.className.toLowerCase();
        Object.entries(labelMap).forEach(([ing, keys]) => {
          if (keys.some((k) => label.includes(k))) found.add(ing);
        });
      });

      const detected = Array.from(found);
      setLabels(detected);
      onDetect(detected);
    } catch (e) {
      console.error(e);
      onDetect([]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card">
      <label>Ingredient image (optional)</label>
      <div className="row" style={{marginTop:6}}>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        {busy && <div className="spinner" />}
      </div>
      <div className="row" style={{marginTop:10}}>
        {labels.length ? labels.map((l) => <span key={l} className="chip">{l}</span>) :
          <span className="muted">Upload a pantry photo to auto-detect items.</span>}
      </div>
    </div>
  );
}
