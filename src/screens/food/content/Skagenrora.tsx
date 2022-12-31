import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function SkagenroraScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "Russet potatoes",
            },
            {
              count: "3",
              description: "tablespoons sour cream",
            },
            {
              count: "3",
              description: "tablespoons mayonnaise",
            },
            {
              count: "3",
              description: "tablespoons dill (finely chopped)",
            },
            {
              count: "2",
              description: "teaspoons red onion (minced)",
            },
            {
              count: "1/8",
              description: "teaspoon (or more) salt",
            },
            {
              count: "1/8",
              description: "teaspoon (or more) ground white pepper",
            },
            {
              count: "",
              description: "a few drops of hot sauce",
            },
          ]}
          title="Skagenrora"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Bake russet potatoes.",
            "Combine remaining ingredients in a medium bowl and mix thouroughly. Refrigerate.",
            "Top baked potatoes with Skagenrora.",
            "Serve with additional hot sauce (Frank's) to taste.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://globalkitchentravels.com/skagenrora-swedish-shrimp-salad/"
      preparation={preparation()}
      title="Skagenrora"
    />
  );
}

export default SkagenroraScreen;
