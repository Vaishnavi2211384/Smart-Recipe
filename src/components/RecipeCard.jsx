import React, { useState, useEffect } from "react";

export default function RecipeCard({ recipe, servings, onFavorite, onRate }) {
  const [rating, setRating] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const imageUrl = `https://source.unsplash.com/600x400/?${recipe.name},indian-food`;

  // Scale nutrition by servings
  const calories = recipe.nutrition.calories * servings;
  const protein = recipe.nutrition.protein * servings;

  // Handle rating
  const handleRating = (star) => {
    setRating(star);
    onRate(recipe, star);
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg text-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition">
      <img src={imageUrl} alt={recipe.name} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-1">{recipe.name}</h2>
        <p className="text-sm text-gray-500 mb-3">
          {recipe.cuisine} | {recipe.difficulty} | {recipe.time} mins | Servings: {servings}
        </p>

        {/* Ingredients */}
        <p className="mb-2">
          <strong>Ingredients:</strong>{" "}
          {showDetails
            ? recipe.ingredients.join(", ")
            : recipe.ingredients.slice(0, 5).join(", ") + "..."}
        </p>

        {/* Steps */}
        <div className="mb-2">
          <strong>Steps:</strong>
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            {showDetails
              ? recipe.steps.map((s, i) => <li key={i}>{s}</li>)
              : recipe.steps.slice(0, 2).map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        {/* Nutrition */}
        <p className="mb-2">
          <strong>Nutrition (per {servings} serving{servings > 1 ? "s" : ""}):</strong>{" "}
          {calories} cal, {protein}g protein
        </p>

        {/* Toggle Details */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-600 underline text-sm mt-2"
        >
          {showDetails ? "Show Less" : "Show More"}
        </button>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className={`text-2xl ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>

        {/* Save Favorite */}
        <button
          onClick={() => onFavorite(recipe)}
          className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg"
        >
          ❤️ Save to Favorites
        </button>
      </div>
    </div>
  );
}
