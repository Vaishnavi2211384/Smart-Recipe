// src/data/recipes.js

const recipes = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    ingredients: ["paneer", "butter", "onion", "tomato", "cream", "spices"],
    instructions: "Cook onion and tomato with spices. Blend into gravy. Add paneer and cream.",
    image: "/images/paneer-butter-masala.jpg",
    category: "Indian",
    difficulty: "Medium",
    cookingTime: 40,
    nutrition: { calories: 350, protein: 12 }
  },
  {
    id: 2,
    name: "Dal Tadka",
    ingredients: ["lentils", "onion", "tomato", "garlic", "ghee", "spices"],
    instructions: "Cook dal until soft. Prepare tadka with onion, tomato, garlic, and spices. Mix together.",
    image: "/images/dal-tadka.jpg",
    category: "Indian",
    difficulty: "Easy",
    cookingTime: 30,
    nutrition: { calories: 250, protein: 10 }
  },
  {
    id: 3,
    name: "Vegetable Pulao",
    ingredients: ["rice", "mixed vegetables", "onion", "spices", "ghee"],
    instructions: "Cook rice with sautéed vegetables and spices until fragrant.",
    image: "/images/veg-pulao.jpg",
    category: "Indian",
    difficulty: "Easy",
    cookingTime: 25,
    nutrition: { calories: 280, protein: 6 }
  },
  {
    id: 4,
    name: "Chicken Biryani",
    ingredients: ["rice", "chicken", "onion", "tomato", "yogurt", "spices"],
    instructions: "Cook chicken with spices. Layer with rice and steam until flavors blend.",
    image: "/images/chicken-biryani.jpg",
    category: "Indian",
    difficulty: "Hard",
    cookingTime: 60,
    nutrition: { calories: 450, protein: 20 }
  },
  {
    id: 5,
    name: "Samosa",
    ingredients: ["potato", "peas", "flour", "spices", "oil"],
    instructions: "Prepare stuffing with potato & peas. Fill dough and deep fry.",
    image: "/images/samosa.jpg",
    category: "Indian Snack",
    difficulty: "Medium",
    cookingTime: 45,
    nutrition: { calories: 150, protein: 4 }
  },
  {
    id: 6,
    name: "Aloo Paratha",
    ingredients: ["wheat flour", "potato", "spices", "ghee"],
    instructions: "Make dough with flour. Fill with spiced potato mash and cook on tawa.",
    image: "/images/aloo-paratha.jpg",
    category: "Indian",
    difficulty: "Easy",
    cookingTime: 30,
    nutrition: { calories: 300, protein: 8 }
  },
  {
    id: 7,
    name: "Chole Bhature",
    ingredients: ["chickpeas", "onion", "tomato", "flour", "spices"],
    instructions: "Cook chole with spices. Fry bhature from fermented dough.",
    image: "/images/chole-bhature.jpg",
    category: "Indian",
    difficulty: "Medium",
    cookingTime: 50,
    nutrition: { calories: 400, protein: 14 }
  },
  {
    id: 8,
    name: "Idli Sambar",
    ingredients: ["rice", "lentils", "spices", "vegetables"],
    instructions: "Steam idlis. Prepare sambar with dal, tamarind, and vegetables.",
    image: "/images/idli-sambar.jpg",
    category: "South Indian",
    difficulty: "Easy",
    cookingTime: 35,
    nutrition: { calories: 220, protein: 9 }
  },
  {
    id: 9,
    name: "Masala Dosa",
    ingredients: ["rice", "lentils", "potato", "spices"],
    instructions: "Prepare dosa batter. Fill with spiced potato stuffing and serve with chutney.",
    image: "/images/masala-dosa.jpg",
    category: "South Indian",
    difficulty: "Medium",
    cookingTime: 40,
    nutrition: { calories: 330, protein: 7 }
  },
  {
    id: 10,
    name: "Gulab Jamun",
    ingredients: ["milk powder", "flour", "sugar", "cardamom"],
    instructions: "Make soft dough, fry balls, and soak in sugar syrup.",
    image: "/images/gulab-jamun.jpg",
    category: "Indian Dessert",
    difficulty: "Medium",
    cookingTime: 45,
    nutrition: { calories: 250, protein: 5 }
  },
  {
    id: 11,
    name: "Rasgulla",
    ingredients: ["milk", "sugar", "lemon juice", "cardamom"],
    instructions: "Prepare chenna, shape balls, and cook in sugar syrup.",
    image: "/images/rasgulla.jpg",
    category: "Indian Dessert",
    difficulty: "Hard",
    cookingTime: 60,
    nutrition: { calories: 200, protein: 6 }
  },
  {
    id: 12,
    name: "Palak Paneer",
    ingredients: ["paneer", "spinach", "onion", "tomato", "spices"],
    instructions: "Blanch spinach, make puree, cook with spices, add paneer.",
    image: "/images/palak-paneer.jpg",
    category: "Indian",
    difficulty: "Medium",
    cookingTime: 35,
    nutrition: { calories: 320, protein: 14 }
  },
  {
    id: 13,
    name: "Vegetable Pakora",
    ingredients: ["gram flour", "vegetables", "spices", "oil"],
    instructions: "Mix vegetables in spiced batter and deep fry.",
    image: "/images/pakora.jpg",
    category: "Indian Snack",
    difficulty: "Easy",
    cookingTime: 20,
    nutrition: { calories: 180, protein: 5 }
  },
  {
    id: 14,
    name: "Rajma Chawal",
    ingredients: ["rajma", "rice", "onion", "tomato", "spices"],
    instructions: "Cook rajma in onion-tomato gravy. Serve with rice.",
    image: "/images/rajma-chawal.jpg",
    category: "Indian",
    difficulty: "Easy",
    cookingTime: 50,
    nutrition: { calories: 350, protein: 12 }
  },
  {
    id: 15,
    name: "Poha",
    ingredients: ["flattened rice", "onion", "potato", "spices"],
    instructions: "Cook poha with sautéed onion, potato, and spices.",
    image: "/images/poha.jpg",
    category: "Indian Breakfast",
    difficulty: "Easy",
    cookingTime: 15,
    nutrition: { calories: 180, protein: 4 }
  },
  {
    id: 16,
    name: "Pav Bhaji",
    ingredients: ["vegetables", "butter", "spices", "bread"],
    instructions: "Cook mashed vegetables with spices. Serve with buttered pav.",
    image: "/images/pav-bhaji.jpg",
    category: "Indian Street Food",
    difficulty: "Medium",
    cookingTime: 40,
    nutrition: { calories: 380, protein: 10 }
  },
  {
    id: 17,
    name: "Kheer",
    ingredients: ["milk", "rice", "sugar", "cardamom", "nuts"],
    instructions: "Cook rice in milk with sugar and cardamom. Garnish with nuts.",
    image: "/images/kheer.jpg",
    category: "Indian Dessert",
    difficulty: "Easy",
    cookingTime: 45,
    nutrition: { calories: 270, protein: 8 }
  },
  {
    id: 18,
    name: "Vada Pav",
    ingredients: ["potato", "chili", "bread", "spices"],
    instructions: "Make spicy potato filling, fry in batter, serve in pav with chutney.",
    image: "/images/vada-pav.jpg",
    category: "Indian Street Food",
    difficulty: "Easy",
    cookingTime: 25,
    nutrition: { calories: 280, protein: 6 }
  },
  {
    id: 19,
    name: "Upma",
    ingredients: ["semolina", "vegetables", "spices", "ghee"],
    instructions: "Roast semolina, cook with vegetables and spices.",
    image: "/images/upma.jpg",
    category: "Indian Breakfast",
    difficulty: "Easy",
    cookingTime: 20,
    nutrition: { calories: 220, protein: 6 }
  },
  {
    id: 20,
    name: "Chicken Curry",
    ingredients: ["chicken", "onion", "tomato", "yogurt", "spices"],
    instructions: "Cook onion & tomato gravy, add marinated chicken, cook until done.",
    image: "/images/chicken-curry.jpg",
    category: "Indian",
    difficulty: "Medium",
    cookingTime: 50,
    nutrition: { calories: 420, protein: 22 }
  }
];

export default recipes;
