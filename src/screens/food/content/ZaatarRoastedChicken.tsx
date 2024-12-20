import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function ZaatarRoastedChickenScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1-2",
              description:
                "boneless chicken breast(s), cut into 4 to 6 large pieces",
            },
            {
              count: "1",
              description: "medium lemon, zested and divided",
            },
            {
              count: "3",
              description: "tablespoons olive oil, divided",
            },
            {
              count: "2",
              description: "tablespoons za'atar, divided",
            },
            {
              count: "1/2",
              description: "head of cauliflower, cut into florets",
            },
            {
              count: "",
              description: "Tahini sauce",
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
            "Finely grate the zest of the lemon into a medium bowl. Juice the zested lemon until you have 2 tablespoons. Reserve 1 tablespoon lemon juice; add the remaining juice to the bowl of zest. Cut the remaining lemon half into wedges and reserve for serving.",
            "Add 1 tablespoon of the olive oil, 1½ tablespoons of the za'atar, ½ teaspoon of the kosher salt, and a dash of black pepper to the bowl of zest, and stir to combine. Add chicken and rub all over with the za'atar mixture. Let marinate at room temperature while you prep the vegetables and heat the oven, at least 10 minutes.",
            "Arrange a rack in the middle of the oven and heat the oven to 425°F.",
            "Place the cauliflower florets on a rimmed baking sheet. Drizzle with the reserved lemon juice and remaining 2 tablespoons olive oil. Season with the remaining za'atar and 1/2 teaspoon kosher salt, and use your hands to toss until evenly coated. Push the vegetables to the sides of the baking sheet in an even layer to make room for the chicken. Place the chicken in a single layer on the baking sheet.",
            "Roast until the chicken is lightly browned, cooked through, and an instant-read thermometer inserted into the thickest part registers at least 165°F, 20 to 25 minutes. Squeeze the reserved lemon wedges over the chicken. Drizzle some tahini all over.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Za'atar Roasted Chicken"
    />
  );
}

export default ZaatarRoastedChickenScreen;
