import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function CauliflowerHotWingsScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description:
                "head of cauliflower, broken into 1 1/2-inch florets",
            },
            {
              count: "1",
              description: "cup all-purpose flour",
            },
            {
              count: "1/2",
              description: "cup buttermilk",
            },
            {
              count: "1/2",
              description: "cup water",
            },
            {
              count: "1",
              description: "teaspoon paprika",
            },
            {
              count: "1/2",
              description: "teaspoon garlic powder",
            },
            {
              count: "2",
              description: "tablespoons unsalted butter",
            },
            {
              count: "3/4",
              description: "cup hot sauce, such as Frank's Red Hot",
            },
            {
              count: "",
              description: "pinch of salt",
            },
          ]}
          title="Cauliflower"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Preheat the oven to 450 degrees F; place oven racks in the top and bottom positions. Line two baking sheets with parchment.",
            "Whisk the flour, paprika, garlic powder and 1 teaspoon salt in a large bowl. In a spouted measuring cup, stir together the buttermilk and 1/2 cup water. Whisk the buttermilk mixture into the flour to make a smooth, thick batter.",
            "Add the cauliflower to the batter and toss well to coat. Transfer the cauliflower to the prepared baking sheets, shaking excess batter back into the bowl. Arrange the florets on the baking sheets so they don't touch. Bake until the batter is set, about 15 minutes.",
            "Meanwhile, melt the butter with the hot sauce in a small saucepan over low heat. When the cauliflower has baked for 15 minutes and the batter is set, drizzle with half of the hot sauce mixture, then turn over the florets and drizzle slightly more (reserve remaining sauce for dipping).",
            "Set the oven to broil. Broil the cauliflower until tender and the coating is crispy, 2 to 3 minutes.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.foodnetwork.com/recipes/ayesha-curry/cauliflower-hot-wings-with-buttermilk-ranch-dipping-sauce-3513202"
      preparation={preparation()}
      title="Cauliflower Hot Wings"
    />
  );
}

export default CauliflowerHotWingsScreen;
