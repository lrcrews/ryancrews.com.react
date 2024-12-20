import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function FriedPotatoeAndOnionsScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "tablespoon vegetable oil",
            },
            {
              count: "1",
              description: "(or 2) Yukon Gold potatoes, peeled and sliced",
            },
            {
              count: "1/2",
              description: "Viadalia onion, sliced into 1-inch pieces",
            },
            {
              count: "1/4",
              description: "teaspoon garlic powder",
            },
            {
              count: "1/4",
              description: "teaspoon salt",
            },
            {
              count: "1/4",
              description: "teaspoon black pepper",
            },
          ]}
          title="Potatoes"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Heat the oil in a large skillet set over medium meat. Once the oil is hot, stir in the sliced potatoes, sliced onion, and seasonings, mixing well to combine.",
            "Cook for 20-25 minutes, flipping the potatoes every 5 minutes or so to ensure even cooking. Avoid over-mixing or flipping, as this will result in mushy potatoes.",
            "Once the potatoes are golden and the onions are soft and slightly charred, serve immediately garnished with fresh parsley, if desired.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://theforkedspoon.com/fried-potatoes-onions/"
      preparation={preparation()}
      title="Fried Potatoes and Onions"
    />
  );
}

export default FriedPotatoeAndOnionsScreen;
