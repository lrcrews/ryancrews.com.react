import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function GranolaScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "3",
              description: "cups rolled oats",
            },
            {
              count: "2",
              description: "cups pecans (roughly chopped)",
            },
            {
              count: "3/4",
              description: "cup shredded sweet coconut",
            },
            {
              count: "1/4",
              description: "cup brown sugar",
            },
            {
              count: "1/4",
              description: "cup maple syrup",
            },
            {
              count: "1/4",
              description: "cup vegetable oil",
            },
            {
              count: "3/4",
              description: "teaspoon salt",
            },
          ]}
          title="Granola"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Heat the oven to 250ºF.",
            "In a large bowl, combine the oats, pecans, coconut, brown sugar, and salt.",
            "Combine oil and maple syrup and add to mixture, stir to combine.",
            "Transfer mixture to parchment paper lined baking sheet, spread evenly, and bake on middle rack for 1 hour and 15 minutes, stirring every 15 minutes.",
            "Cool for 30 minutes.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://altonbrown.com/recipes/healthy-homemade-granola/"
      preparation={preparation()}
      title="Granola"
    />
  );
}

export default GranolaScreen;
