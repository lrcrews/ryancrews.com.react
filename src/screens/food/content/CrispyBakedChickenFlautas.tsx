import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function CrispyBakedChickenFlautasScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1/2",
              description: "pound ground chicken",
            },
            {
              count: "1.5",
              description: "tablespoon vegetable oil, plus more for brushing",
            },
            {
              count: "1/4",
              description: "cup water",
            },
            {
              count: "1/2",
              description: "tablespoon tomato paste",
            },
            {
              count: "1",
              description:
                "teaspoon chopped chipotle chile in adobo, plus 1 teaspoon of the adobo sauce",
            },
            {
              count: "1/8",
              description:
                "cup chopped fresh cilantro leaves and tender stems, plus more for serving",
            },
            {
              count: "1",
              description: "teaspoon fresh lime juice",
            },
            {
              count: "4",
              description:
                "ounces Monterey Jack or Pepper Jack cheese, shredded",
            },
            {
              count: "4",
              description: "flour tortillas (8-inch size)",
            },
            {
              count: "",
              description: "salt and pepper",
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
            "Preheat oven to 425°. Line a large rimmed baking sheet with parchment paper.",
            "Heat oil in a large skillet over medium-high. Add chicken; season with salt and pepper and cook, breaking up with a spoon, until browned, 3 to 4 minutes.",
            "Stir in tomato paste, chipotle and sauce, and water. Bring to a simmer, then reduce heat and cook until most of liquid has evaporated, about 2 to 4 minutes.",
            "Turn off heat and stir in cilantro and lime juice.",
            "Place tortilla on the prepared baking sheet, put 1/4 of the cheese down the center of the tortilla, top with 1/4 of the chicken mixture, and roll up tightly, placing seam-side down. Repeat with remaining tortillas, cheese, and chicken mixture.",
            "Brush tops of flautas with oil and bake until browned and crisp, 12 to 14 minutes.",
            "Serve with sour cream and cilantro.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.marthastewart.com/1543133/crispy-baked-chicken-flautas"
      preparation={preparation()}
      title="Crispy Baked Chicken Flautas"
    />
  );
}

export default CrispyBakedChickenFlautasScreen;
