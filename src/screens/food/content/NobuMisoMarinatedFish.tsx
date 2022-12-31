import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function NobuMisoMarinatedFishScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "Fish fillets (cod, black cod, or similar)",
            },
            {
              count: "1/4",
              description: "cup sake",
            },
            {
              count: "1/4",
              description: "cup mirin",
            },
            {
              count: "1/4",
              description: "cup white miso paste",
            },
            {
              count: "2",
              description: "tablespoons granulated sugar",
            },
          ]}
          title="Fish"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Two to three days beforehand... Bring sake and mirin to a boil in a medium saucepan over high heat. Boil for 20 seconds to evaporate the alcohol. Turn the heat down to low, add the miso paste, and whisk. When the miso has dissolved completely, turn the heat up to high again and add the sugar, whisking constantly to ensure that the sugar doesn't burn on the bottom of the pan. Remove from heat once the sugar is fully dissolved. Cool to room temperature.",
            "Once marinade is at room temperature pat fish dry and slather in marinade, place in glass dish, cover with plastic wrap, refrigerate for two to three days.",
            "Preheat oven to 400°F and begin white rice.",
            "Heat an oven-proof skillet over high heat on the stovetop adding enough oil (vegetable) to coat bottom of pan.",
            "Lightly wipe off any excess miso clinging to the fillets, but don't rinse it off. Place the fish skin-side-up on the pan and cook until the bottom of the fish browns and blackens in spots, about 3 minutes. Flip and continue cooking until the other side is browned, 2 to 3 minutes.",
            "Transfer to the oven and bake for 5 to 10 minutes, until fish is opaque and flakes easily.",
            "Serve over white rice with choice of side (like baby bok chow, or sautéed spinach, etc.).",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.thekitchn.com/recipe-nobu-miso-marinated-black-cod-117238#post-recipe-11824"
      preparation={preparation()}
      title="Nobu's Miso-Marinated Fish"
    />
  );
}

export default NobuMisoMarinatedFishScreen;
