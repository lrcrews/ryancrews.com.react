import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function KungPaoChickenScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1/2",
              description:
                "pound boneless, skinless chicken breast, cut into 1/4-inch-thick slices",
            },
            {
              count: "1",
              description: "red bell pepper, cut into 1-inch squares",
            },
            {
              count: "1",
              description: "green bell pepper, cut into 1-inch squares",
            },
            {
              count: "1/2",
              description: "teaspoon minced ginger",
            },
            {
              count: "2",
              description: "tablespoons shelled, dry-roasted peanuts",
            },
            {
              count: "2",
              description: "tablespoons vegetable oil",
            },
            {
              count: "",
              description: "Rice",
            },
          ]}
          title="Stir Fry"
        />
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "teaspoon soy sauce",
            },
            {
              count: "1/2",
              description: "teaspoon sherry",
            },
            {
              count: "1",
              description: "teaspoon corn starch",
            },
            {
              count: "1",
              description: "teaspoon sesame oil",
            },
          ]}
          title="Marinade"
        />
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "tablespoons chicken broth",
            },
            {
              count: "1",
              description: "tablespoon soy sauce",
            },
            {
              count: "1",
              description: "tablespoon sherry",
            },
            {
              count: "2",
              description: "teaspoons balsamic vinegar",
            },
            {
              count: "2",
              description: "teaspoons chile-garlic sauce",
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
            "Start the rice.",
            "Make the sauce: In a small bowl, whisk together the chicken broth, balsamic vinegar, chile-garlic sauce, soy sauce, and sherry. Set aside.",
            "Marinate the chicken: In a medium bowl, combine the chicken, soy sauce, sherry, corn starch, and sesame oil. Stir until the chicken is lightly coated. Set aside.",
            "Heat a 14-inch flat-bottomed carbon-steel wok (or a 12-inch stainless-steel skillet) over high heat until a drop of water vaporizes within 1 to 2 seconds of contact. Swirl in 1 Tbsp. vegetable oil. Add ginger; stir-fry until fragrant, about 10 seconds. Add the chicken in an even layer. Cook, undisturbed, until it begins to brown, about 1 minute. Using a metal spatula, stir-fry the chicken until lightly browned but not cooked through, about 1 minute more. Transfer to a plate and season lightly with salt.",
            "Swirl in the remaining 1 Tbsp. vegetable oil. Add bell peppers; stir-fry for 1 minute. Return the chicken to the pan along with the reserved sauce; stir-fry until the chicken is cooked through, 1 to 3 minutes. Remove from heat and sprinkle with peanuts.",
            "Serve with rice.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Kung Pao Chicken"
    />
  );
}

export default KungPaoChickenScreen;
