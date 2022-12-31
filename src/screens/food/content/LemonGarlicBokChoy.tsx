import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function LemonGarlicBokChoyScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "pound (bunch) baby bok choy",
            },
            {
              count: "1.5",
              description: "tablespoons extra-virgin olive oil",
            },
            {
              count: "3",
              description: "cloves garlic, minced",
            },
            {
              count: "1",
              description: "lemon, cut into quarters",
            },
            {
              count: "",
              description: "salt and red pepper flakes",
            },
          ]}
          title="Bok Choy"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Remove any discolored outer stalks of the bok choy and discard them. Clean and rinse.",
            "Trim stems of bok choy and half length-wise (or quarter if larger). Pat dry.",
            "Add the oil, garlic and red pepper flakes to a wide room-temperature skillet. Place over medium heat and cook, stirring occasionally, until the oil begins to bubble around the garlic, but before the garlic starts to turn light brown.",
            "Toss in the boy choy and spread into one layer. Sprinkle with about 1/4 teaspoon of salt then cook, without stirring, until the bottom is starting to turn brown, about 2 minutes.",
            "Flip then cook another 2 minutes or until the green leaves have wilted and the white bottoms are beginning to soften, but still have some crunch.",
            "Transfer to a platter then squeeze 2 lemon wedges on top.",
            "Serve with remaining lemon wedges on the side.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.inspiredtaste.net/34160/lemon-garlic-bok-choy-recipe/"
      preparation={preparation()}
      title="Lemon Garlic Sautéed Bok Choy"
    />
  );
}

export default LemonGarlicBokChoyScreen;
