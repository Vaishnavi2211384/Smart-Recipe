import React from "react";

export default function Filters({ filters, setFilters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Max Cooking Time */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-white">⏱ Max Cooking Time</label>
        <input
          type="number"
          placeholder="e.g. 30"
          className="w-full p-3 rounded-xl text-black shadow"
          onChange={(e) => setFilters({ ...filters, time: e.target.value })}
        />
      </div>

      {/* Difficulty */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-white">🔥 Difficulty</label>
        <select
          className="w-full p-3 rounded-xl text-black shadow"
          onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Serving Size */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-white">🍽 Serving Size</label>
        <input
          type="number"
          min="1"
          placeholder="e.g. 2"
          className="w-full p-3 rounded-xl text-black shadow"
          onChange={(e) => setFilters({ ...filters, servings: e.target.value })}
        />
      </div>
    </div>
  );
}
