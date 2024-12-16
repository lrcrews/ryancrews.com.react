import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function BraisedChickenScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "boneless chicken breast, skin on",
            },
            {
              count: "1",
              description: "teaspoon paprika",
            },
            {
              count: "1.25",
              description: "tablespoons all-purpose flour",
            },
            {
              count: "1",
              description: "tablespoon butter",
            },
            {
              count: "1/2",
              description:
                "pound large carrots, halved lengthwise and cut into 1 ½-inch-long pieces",
            },
            {
              count: "1",
              description: "cup chicken broth",
            },
            {
              count: "2",
              description: "bundles of oregano sprigs",
            },
            {
              count: "1/2",
              description: "lemon, end removed, sliced into thin rounds",
            },
            {
              count: "",
              description: "salt and pepper",
            },
          ]}
          title="Chicken"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Pat chicken dry with paper towels. Sprinkle chicken with paprika, salt, and pepper.",
            "Melt butter in a large enamel-coated cast-iron skillet/pot over medium-high. Place chicken, skin side down, in skillet/pot; cook until skin is golden brown, about 6 minutes. Flip and cook additional 2 minutes (chicken will not be cooked through). Remove chicken from skillet/pot.",
            "Add carrots to pan, and cook, stirring occasionally, until browned, about 7 minutes.",
            "Add flour to skillet; cook, stirring often, 1 minute. Add broth, oregano, and season lightly with salt and pepper; bring to a boil.",
            "Place chicken, skin side up, on carrots. Partially cover with lid; reduce heat to medium-low, and cook until chicken is done, about 20 minutes.",
            "Remove oregano sprigs. Stir in lemons, and serve (tastes great over mashed potatoes!).",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.southernliving.com/recipes/braised-chicken-thighs-carrots-lemons-recipe"
      preparation={preparation()}
      title="Braised Chicken"
    />
  );
}

export default BraisedChickenScreen;
