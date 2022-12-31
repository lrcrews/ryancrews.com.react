import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function KoreanLettuceWrapsScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "large head cauliflower, cut into small florets",
            },
            {
              count: "1",
              description: "bunch of butter lettuce, washed and dried",
            },
            {
              count: "1/2",
              description: "cup unsalted peanuts, roughly chopped",
            },
            {
              count: "1/2",
              description: "cup green onions, roughly chopped",
            },
            {
              count: "",
              description: "olive oil, salt, spicy mayo",
            },
          ]}
          title="Lettuce Wraps"
        />
        <Ingredients
          ingredients={[
            {
              count: "1/3",
              description: "cup soy sauce",
            },
            {
              count: "1/4",
              description: "cup sake",
            },
            {
              count: "1/8",
              description: "cup brown sugar",
            },
            {
              count: "1",
              description: "tablespoon rice vinegar",
            },
            {
              count: "1",
              description: "tablespoon sambal oelek",
            },
            {
              count: "1",
              description: "tablespoon toasted sesame oil",
            },
            {
              count: "1/2",
              description: "tablespoon corn starch",
            },
            {
              count: "1",
              description: "teaspoon ginger",
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
            "Preheat the oven to 450 degrees. Toss the cauliflower with a drizzle of oil and a pinch of salt. Roast for 30 minutes.",
            "Mix sauce ingredients until smooth then simmer in a saucepan over low heat until it thickens slightly.",
            "Pour sauce directly onto the roasting pan – just enough to get the cauliflower nice and saucy. Toss gently to combine.",
            "Plate sauced cauliflower and lettuce cups.",
            "Put extra sauce in bowl, topping lettuce cups with extra sauce, crushed peanuts, chives, and/or a drizzle of spicy mayo.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://pinchofyum.com/korean-bbq-style-cauliflower-lettuce-wraps#tasty-recipes-53673-jump-target"
      preparation={preparation()}
      title="Korean Lettuce Wraps"
    />
  );
}

export default KoreanLettuceWrapsScreen;
