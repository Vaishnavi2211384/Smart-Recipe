export function matchRecipes(predictions, recipes) {
  return recipes
    .map((recipe) => {
      const matches = recipe.ingredients.filter((ing) =>
        predictions.some(
          (p) =>
            ing.toLowerCase().includes(p.className.toLowerCase()) ||
            p.className.toLowerCase().includes(ing.toLowerCase())
        )
      );
      const score = matches.length / recipe.ingredients.length;
      return { ...recipe, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}
