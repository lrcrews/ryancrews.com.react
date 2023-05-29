import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function BlackBeanFlautasScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "6+",
              description: "small/medium tortillas (corn preferred)",
            },
            {
              count: "1/2",
              description: "can of black beans",
            },
            {
              count: "1",
              description: "tablespoon vegetable oil",
            },
            {
              count: "1",
              description: "lime, halved with one half cut into wedges",
            },
            {
              count: "",
              description: "salt and Pepper Jack (or Monterey Jack) cheese",
            },
            {
              count: "",
              description:
                "(optional) grilled corn cut off the cob or small tomato (diced)",
            },
          ]}
          title="Flautas"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Preheat oven to 425°F with rack in top third.",
            "In medium bowl mix beans, juice of half the lime, pinch of salt, and any optional additions together.",
            "Place 6 to 8 tortillas on a large, parchment paper lined, baking sheet and top with cheese.",
            "Bake torillas until cheese has begun to melt, about 2 minutes.",
            "Remove tortillas from oven, fill with bean mixture (1 or 2 tablespoons each), roll, drizzle tops with vegetable oil, and place back in oven for 8 minutes.",
            "Let cool for 1 to 2 minutes.",
            "Serve with remaining lime wedges on the side.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Black Bean Flautas"
    />
  );
}

export default BlackBeanFlautasScreen;
