import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function RicePilafScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "cup long-grain white rice (such as basmati)",
            },
            {
              count: "2.5",
              description: "cups chicken broth",
            },
            {
              count: "2",
              description: "tablespoons unsalted butter",
            },
            {
              count: "1",
              description: "teaspoon kosher salt",
            },
            {
              count: "1/2",
              description: "teaspoon garlic powder",
            },
            {
              count: "1/4",
              description: "teaspoon ground black pepper",
            },
            {
              count: "1/8",
              description: "teaspoon paprika",
            },
            {
              count: "1",
              description: "pinch (about 1/16 teaspoon) onion powder",
            },
            {
              count: "2",
              description: "tablespoons olive oil",
            },
            {
              count: "1",
              description:
                "tablespoon finely chopped fresh cilantro (optional)",
            },
            {
              count: "1/3",
              description: "cup toasted slivered almonds (optional)",
            },
            {
              count: "1/3",
              description: "cup golden raisins (optional)",
            },
          ]}
          title="Rice Pilaf"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "In a medium saucepan set over medium heat, add the chicken broth, butter, salt, garlic powder, pepper, paprika, and onion powder. Once the mixture starts to simmer, reduce to low heat.",
            "Toast the almonds in a dry skillet over medium heat until golden brown, about 3-5 minutes. Remove from heat and set aside.",
            "Soak golden raisins in warm water for 5 minutes, then drain.",
            "In a large skillet set over medium-low heat and add the olive oil.",
            "Rinse the rice under cold water until the water runs clear, about 1 minute. Drain well.",
            "When the oil is hot, add the rice and cook until it turns bright white, about 5-7 minutes.",
            "Pour the warm broth mixture into the skillet and stir to combine. Once the mixture simmers, cover and cook for 20 minutes.",
            "Remove the cover and continue cooking for 5-10 minutes (until all of the broth is absorbed).",
            "Mix in any optional ingredients. Enjoy.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      originalRecipeLink="https://lifemadesimplebakes.com/perfect-rice-pilaf-5/#wprm-recipe-container-35285"
      ingredients={ingredients()}
      preparation={preparation()}
      title="Rice Pilaf"
    />
  );
}

export default RicePilafScreen;
