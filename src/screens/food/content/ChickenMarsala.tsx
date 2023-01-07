import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function ChickenMarsalaScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "chicken breasts",
            },
            {
              count: "1/2",
              description: "cup all-purpose flour",
            },
            {
              count: "1",
              description: "tablespoon olive oil",
            },
            {
              count: "2",
              description: "tablespoons butter",
            },
            {
              count: "3",
              description: "cups sliced mushrooms",
            },
            {
              count: "3/4",
              description: "cup Marsala wine",
            },
            {
              count: "1",
              description: "cup chicken stock",
            },
            {
              count: "",
              description: "pasta",
            },
          ]}
          title="Chicken"
        />
        <Ingredients
          ingredients={[
            {
              count: "1/2",
              description: "teaspoon paprika",
            },
            {
              count: "1/2",
              description: "teaspoon salt",
            },
            {
              count: "1/2",
              description: "teaspoon garlic powder",
            },
            {
              count: "1/4",
              description: "teaspoon black pepper",
            },
            {
              count: "1/4",
              description: "teaspoon onion powder",
            },
            {
              count: "1/4",
              description: "teaspoon cayenne pepper",
            },
            {
              count: "1/4",
              description: "teaspoon oregano",
            },
          ]}
          title="Seasoning"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Start boiling water for pasta.",
            "Combine seasoning and flour in large Ziploc bag, seal and shake to mix thouroughly.",
            "Add chicken to bag , seal, and shake to coat.",
            "In large pan, heat oil on medium-high until hot.",
            "Add 1 tablespoon of butter and chicken (shake off excess seasoning), cook on each side for 3 minutes.",
            "Transfer chicken to plate.",
            "Add 1 tablespoon of butter to pan and cook mushrooms until golden brown around edges.",
            "Add Marsala wine and bring to boil, allow to cook until wine has reduced by half while scrapping browned bits from bottom of pan.",
            "Add chicken stock and cook 3 minutes, reducing heat to half when sauce has thickened slighly.",
            "While stock cooks, start pasta (or wait for next step, depending on pasta cooking time and desired texture).",
            "Reduce heat to half if not already done, and add chicken back to pan, cooking for 6 minutes.",
            "Serve chicken on top, or next to, pasta, using some sauce on pasta. Salt and pepper to taste.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.foodnetwork.com/recipes/chicken-marsala-3644736"
      preparation={preparation()}
      title="Chicken Marsala"
    />
  );
}

export default ChickenMarsalaScreen;
