import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function ChickenTikkaMasalaScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "chicken breast",
            },
            {
              count: "1/4",
              description: "cup plain yogurt",
            },
            {
              count: "1",
              description: "tablespoon lemon juice",
            },
            {
              count: "1/2",
              description: "tablespoon minced ginger",
            },
            {
              count: "1",
              description: "teaspoon salt",
            },
            {
              count: "1",
              description: "teaspoon ground cumin",
            },
            {
              count: "1",
              description: "teaspoon garam masala",
            },
            {
              count: "1",
              description: "teaspoon paprika",
            },
            {
              count: "3/4",
              description: "teaspoon garlic powder",
            },
          ]}
          title="Chicken"
        />
        <Ingredients
          ingredients={[
            {
              count: "1.5",
              description: "tablespoons vegetable oil",
            },
            {
              count: "1/2",
              description: "onion, finely chopped",
            },
            {
              count: "2",
              description: "tablespoon minced ginger",
            },
            {
              count: "4",
              description: "garlic cloves, minced",
            },
            {
              count: "1",
              description: "teaspoon ground cumin",
            },
            {
              count: "1",
              description: "teaspoon ground turmeric",
            },
            {
              count: "1",
              description: "teaspoon ground coriander",
            },
            {
              count: "1",
              description: "teaspoon ground paprika",
            },
            {
              count: "1",
              description: "teaspoon chili powder",
            },
            {
              count: "1",
              description: "teaspoon garam masala",
            },
            {
              count: "2/3",
              description: "cup water",
            },
            {
              count: "1/2",
              description: "cup plain yogurt",
            },
            {
              count: "1",
              description: "can (15oz) tomato sauce",
            },
          ]}
          title="Sauce"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Slice the chicken into bite-sized chunks. Combine the cubed chicken with the yogurt, lemon juice, garlic, ginger, salt, cumin, garam masala, and paprika and stir until well-coated.",
            "Cover and refrigerate for at least 1 hour, or overnight.",
            "Preheat the oven to 500°F. Line a high-sided baking pan or roasting tray with aluminum foil.",
            "Place rack into baking pan and arrange chicken on top. Bake for about 15 minutes, until slightly dark brown on the edges.",
            "While chicken is baking, Heat the oil in a large pot over medium heat, then sauté the onions, ginger, and garlic until tender but not browned. Add the cumin, turmeric, coriander, paprika, chili powder, and garam masala and stir constantly for about 30 seconds, until the spices are fragrant. Stir in the tomato sauce and water, then bring to a boil and cook for about 5 minutes. Pour in the yogurt.",
            "When chicken is done, add it to the sauce and simmer for 2-5 minutes.",
            "Serve with rice or naan.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://tasty.co/recipe/homemade-chicken-tikka-masala"
      preparation={preparation()}
      title="Chicken Tikka Masala"
    />
  );
}

export default ChickenTikkaMasalaScreen;
