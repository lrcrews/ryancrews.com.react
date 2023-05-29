import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function BeerBatteredFishScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1/2+",
              description: "pound of white fish (Tilapia, Cod, etc.)",
            },
            {
              count: "1",
              description: "cup all-purpose flour",
            },
            {
              count: "1",
              description: "cup beer, cold (Stella, Old English, whatever)",
            },
            {
              count: "3",
              description: "quarts peanut oil (or safflower, vegetable, etc.)",
            },
            {
              count: "1.5",
              description: "teaspoon baking powder",
            },
            {
              count: "1",
              description: "teaspoon salt",
            },
            {
              count: "1/4",
              description: "teaspoon cayenne pepper",
            },
            {
              count: "",
              description: "Dash Old Bay seasoning",
            },
            {
              count: "",
              description: "Cornstarch, for dredging",
            },
            {
              count: "",
              description: "Malt vinegar, for serving",
            },
          ]}
          title="Fish"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Whisk together the flour, baking powder, salt, cayenne pepper, and Old Bay seasoning in a medium mixing bowl. Slowly whisk in the beer until the batter is completely smooth and free of any lumps. Refrigerate for 15 minutes. The batter can be made up to 1 hour ahead of time.",
            "Heat the oil in a 5-quart Dutch oven over high heat until it reaches 350ºF on a candy or fry thermometer.",
            "Dredge the fish in the cornstarch, tapping off the excess. When the oil hits 350ºF, dip the fish in the batter and ease into the oil. Don't crowd the pan. When the batter is set on one side, turn the fish over and cook until golden brown and delicious, about 2 minutes. Remove the fish to another wire rack set over a paper towel-lined half sheet pan.",
            "Once all the fish is fried, season with salt and sprinkle with vinegar. Consume.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://altonbrown.com/recipes/beer-battered-chips-and-fish/"
      preparation={preparation()}
      title="Beer Battered Fish"
    />
  );
}

export default BeerBatteredFishScreen;
