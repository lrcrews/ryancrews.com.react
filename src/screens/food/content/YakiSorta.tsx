import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function YakiSortaScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "2",
              description:
                "bags of yakisoba noodles (or 1 pound of frozen presteamed yakisoba noodles)",
            },
            {
              count: "2",
              description: "tablespoons olive oil",
            },
            {
              count: "1",
              description: "small yellow onion, thinly sliced",
            },
            {
              count: "1",
              description: "large carrot, peeled and cut into matchsticks",
            },
            {
              count: "1",
              description:
                "large red bell pepper, stemmed, cored, and thinly sliced",
            },
            {
              count: "1",
              description: "tablespoon minced garlic",
            },
            {
              count: "1",
              description: "cup thinly sliced scallions",
            },
            {
              count: "1",
              description: "cup (or more) roughly chopped cabbage",
            },
          ]}
          title="Yakisoba"
        />
        <Ingredients
          ingredients={[
            {
              count: "3",
              description: "tablespoons oyster sauce",
            },
            {
              count: "2",
              description: "tablespoons Worcestershire sauce",
            },
            {
              count: "1.5",
              description: "tablespoons soy sauce",
            },
            {
              count: "1.5",
              description: "tablespoons sake",
            },
            {
              count: "1",
              description: "tablespoon olive oil",
            },
            {
              count: "1",
              description: "tablespoon ketchup",
            },
            {
              count: "1",
              description: "teaspoon sugar",
            },
            {
              count: "1/4",
              description: "teaspoon ginger",
            },
            {
              count: "1/4",
              description: "teaspoon black pepper",
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
            "In a small bowl combine all of the ingredients and mix well.",
            "Make the yakisoba: Place yakisoba noodles in a colander and rinse under room-temperature water. Using your hands, gently loosen and separate noodles. Drain well.",
            "In a 12-inch high-sided nonstick skillet, heat 1 tablespoon of the oil over medium-high. Add noodles and spread in an even layer; cook undisturbed until golden and charred in spots, 3 minutes. Stir noodles once, then cook undisturbed until golden and charred in spots on the other side, 2 minutes longer. Transfer to a large plate.",
            "To the skillet over medium, add the remaining 1 tablespoon oil, onion, carrot and bell pepper, and season with salt and pepper. Cook, stirring occasionally, until the vegetables are softened and charred in spots, 5 minutes. Stir in garlic until well combined, then add mushrooms and cook, stirring occasionally, until vegetables are tender and light golden, 3 to 5 minutes. Stir in kale in batches until wilted. Add the noodles, sauce and all but ¼ cup of the scallions, and cook, stirring occasionally, until sauce is absorbed, about 3 minutes. (Noodles should be nicely coated in the sauce but not soupy.) Season with salt and pepper.",
            "Plate and garnish with remaining scallions.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://cooking.nytimes.com/recipes/1022780-vegetable-yakisoba"
      preparation={preparation()}
      title="Yaki-Sorta"
    />
  );
}

export default YakiSortaScreen;
