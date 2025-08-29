import React, { useState } from "react";

export default function Feedback() {
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (suggestion.trim() === "") return;
    setSubmitted(true);
    setSuggestion("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white">
      <h2 className="text-xl font-bold mb-3">💡 Suggestions?</h2>
      {submitted ? (
        <p className="text-green-300 font-semibold">✅ Thanks for your feedback!</p>
      ) : (
        <>
          <textarea
            className="w-full p-3 rounded-xl text-black shadow"
            placeholder="Your feedback..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-xl shadow-lg transition"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
