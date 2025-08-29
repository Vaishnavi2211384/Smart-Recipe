import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import Filters from "./components/Filters";
import Feedback from "./components/Feedback";
import recipes from "./data/recipes.json";
import { matchRecipes } from "./utils/matchRecipes";
import { Search, Utensils } from "lucide-react";

export default function App() {
  const [ingredients, setIngredients] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [diet, setDiet] = useState("");
  const [filters, setFilters] = useState({});
  const [matchedRecipes, setMatchedRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});

  // Load saved data
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const savedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    setFavorites(favs);
    setRatings(savedRatings);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [favorites, ratings]);

  const handleSearch = () => {
    const manualIngredients = ingredients
      .toLowerCase()
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i !== "");

    const allSelected = [...manualIngredients, ...selectedIngredients];
    const results = matchRecipes(allSelected, diet, filters, recipes);
    setMatchedRecipes(results);
  };

  const handleFavorite = (recipe) => {
    if (!favorites.some((r) => r.name === recipe.name)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const handleRate = (recipe, star) => {
    setRatings((prev) => ({ ...prev, [recipe.name]: star }));
  };

  // Suggest recipes = top rated + favorites
  const suggestedRecipes = recipes
    .filter((r) => ratings[r.name] >= 4 || favorites.some((f) => f.name === r.name))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
      {/* Hero */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold flex justify-center items-center gap-3">
          <Utensils className="w-10 h-10 text-yellow-300" /> Smart Recipe Generator
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Enter ingredients, set preferences, save favorites ❤️ and discover recipes 🍲
        </p>
      </div>

      {/* Filters + Search */}
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-md p-6 rounded-2xl">
        <Filters filters={filters} setFilters={setFilters} />
        <button
          onClick={handleSearch}
          className="mt-4 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition w-full justify-center"
        >
          <Search className="w-5 h-5" /> Find Recipes
        </button>
      </div>

      {/* Results */}
      <div className="px-6 pb-10">
        <RecipeList
          recipes={matchedRecipes}
          filters={filters}
          onFavorite={handleFavorite}
          onRate={handleRate}
        />
      </div>

      {/* Suggested Recipes */}
      {suggestedRecipes.length > 0 && (
        <div className="px-6 pb-10">
          <h2 className="text-3xl font-bold mb-4">✨ Suggested For You</h2>
          <RecipeList
            recipes={suggestedRecipes}
            filters={filters}
            onFavorite={handleFavorite}
            onRate={handleRate}
          />
        </div>
      )}

      {/* Feedback */}
      <div className="px-6 pb-10">
        <Feedback />
      </div>
    </div>
  );
}
