const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Combine bakeryA and bakeryB available ingredients since we don't have
  // to consider the case where one bakery has BOTH ingredients for a recipe
  let bakeryIngredients = bakeryA;
  for (const eachIngredient of bakeryB) {
    bakeryIngredients.push(eachIngredient);
  }


  // Go through each recipe, check if both ingredients are in combined ingredients list (bakeryIngredients)
  for (let i = 0; i < recipes.length; i++) {
    if (
      bakeryIngredients.includes(recipes[i].ingredients[0]) &&
      bakeryIngredients.includes(recipes[i].ingredients[1])     // Recipes only contain 2 ingredients
    ) {
      return recipes[i].name;
    }
  }
};

// Persian Cheesecake
// Nima's Famous Dijon Raisins
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));