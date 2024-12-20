import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function MisoGarlicCauliflowerBitesScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1/2",
              description:
                "head of cauliflower, trimmed and cut into 1- to 2-inch florets",
            },
            {
              count: "1",
              description: "scallion, thinly sliced",
            },
            {
              count: "1",
              description: "tablespoon dry-roasted peanuts, chopped",
            },
            {
              count: "1/4",
              description: "teaspoon garlic powder",
            },
            {
              count: "1/2",
              description: "tablespoon chili sauce",
            },
            {
              count: "1/2",
              description: "tablespoon toasted sesame oil",
            },
            {
              count: "1",
              description: "tablespoon cornstarch",
            },
            {
              count: "1.5",
              description: "tablespoons water",
            },
            {
              count: "1.5",
              description: "tablespoons white miso",
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
            "Preheat oven to 425°F. Line a large rimmed baking sheet with parchment paper.",
            "Whisk miso, water, cornstarch, sesame oil, chili sauce and garlic together in a medium bowl until smooth. Add cauliflower; toss well to combine. Spread on the prepared baking sheet. Roast until tender and slightly charred, stirring halfway through, about 30 minutes. Garnish with peanuts and scallions.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Miso-Garlic Cauliflower Bites"
    />
  );
}

export default MisoGarlicCauliflowerBitesScreen;
