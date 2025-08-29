export function matchRecipes(ingredients, diet, filters, recipes) {
  // Normalize input ingredients
  const normalizedInputs = ingredients.map(i => i.toLowerCase());

  const matched = recipes
    .map(r => {
      const recipeIngredients = r.ingredients.map(x => x.toLowerCase());

      // Count matches
      const matchCount = normalizedInputs.reduce((count, input) => {
        return count + (recipeIngredients.some(ri => ri.includes(input)) ? 1 : 0);
      }, 0);

      const dietOk = diet ? r.diet.includes(diet) : true;
      const timeOk = filters.time ? r.time <= filters.time : true;
      const diffOk = filters.difficulty ? r.difficulty === filters.difficulty : true;

      return {
        ...r,
        matchCount,
        isValid: matchCount > 0 && dietOk && timeOk && diffOk
      };
    })
    .filter(r => r.isValid);

  // Sort by match count (highest first)
  return matched.sort((a, b) => b.matchCount - a.matchCount);
}
