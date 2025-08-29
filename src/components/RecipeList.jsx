import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, filters, onFavorite, onRate }) {
  if (!recipes.length) {
    return <p className="text-center text-gray-200">No recipes found. Try different ingredients.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((r, idx) => (
        <RecipeCard
          key={idx}
          recipe={r}
          servings={filters.servings || 1}
          onFavorite={onFavorite}
          onRate={onRate}
        />
      ))}
    </div>
  );
}
