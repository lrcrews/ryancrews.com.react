import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function OnePanOrecchiettePastaScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "Tbsp. olive oil",
            },
            {
              count: "1/2",
              description: "onion, diced",
            },
            {
              count: "8",
              description: "oz. spicy Italian sausage, casings removed",
            },
            {
              count: "3",
              description: "cups chicken broth (divided into 1½ cup portions)",
            },
            {
              count: "1.25",
              description: "cups orecchiette pasta",
            },
            {
              count: "1",
              description: "cup roughly chopped arugula",
            },
            {
              count: "1/4",
              description: "cup finely grated Parmigiano-Reggiano cheese",
            },
          ]}
          title="Pasta"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Heat oil in a large deep skillet over medium heat. Cook onion, stirring, until softened, 5 to 7 minutes.",
            "Add sausage; cook, stirring and breaking up lumps, until sausage is browned, 5 to 7 minutes.",
            "Add 1½ cups broth and bring to a boil, stirring and scraping up browned bits from bottom of skillet. Add pasta; cook, stirring frequently, until liquid is absorbed.",
            "Add 1½ cups broth; cook until pasta is al dente and most of broth is absorbed, about 15 minutes.",
            "Stir in arugula. Ladle pasta into bowls and sprinkle each with 2 Tbsp. cheese.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.allrecipes.com/recipe/239047/one-pan-orecchiette-pasta/"
      preparation={preparation()}
      title="One-Pan Orecchiette Pasta"
    />
  );
}

export default OnePanOrecchiettePastaScreen;
