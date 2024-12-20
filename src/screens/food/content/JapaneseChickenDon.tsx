import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function JapaneseChickenDonScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "chicken breast, skin on",
            },
            {
              count: "3/8",
              description: "cup dashi or chicken broth (6 tablespoons)",
            },
            {
              count: "1/2",
              description: "yellow onion, thinly sliced",
            },
            {
              count: "1",
              description:
                "medium carrot, peeled and cut in half lengthwise and thinly sliced on an angle",
            },
            {
              count: "1",
              description: "small head of broccoli, cut into small florets",
            },
            {
              count: "2",
              description: "scallions, thinly sliced",
            },
            {
              count: "",
              description: "Shichimi togarashi (Japanese seven spice)",
            },
            {
              count: "",
              description: "short grain rice",
            },
          ]}
          title="Chicken Don"
        />
        <Ingredients
          ingredients={[
            {
              count: "2.5",
              description: "tablespoons soy sauce",
            },
            {
              count: "2",
              description: "tablespoons mirin",
            },
            {
              count: "1",
              description: "tablespoon sugar",
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
            "Stir together the soy sauce, mirin, and sugar in a small bowl and set aside.",
            "Heat a 12-inch nonstick skillet over medium. Cook chicken, skin side down, undisturbed, until skin is crisp and deeply browned, 10 to 12 minutes.",
            "Flip chicken, and cook, undisturbed, until underside is lightly browned but chicken is not cooked through, about 2 minutes.",
            "Transfer chicken, skin side up, to a cutting board. Cut chicken into about 1-inch pieces; set aside. Wipe skillet clean.",
            "Bring dashi to a simmer in skillet over medium-high. Scatter onions, carrots, and brocolli evenly over dashi, and top with chicken thigh pieces, skin side up. Cook, undisturbed, until onions are softened, about 2 minutes.",
            "Drizzle with soy sauce mixture; gently shake skillet to evenly disperse. Cook, undisturbed, until chicken is cooked through, about 5 minutes.",
            "Stir in scallions, flipping chicken pieces to coat in sauce. Cook until scallions are wilted, about 2 minutes.",
            "Cover skillet, and remove from heat. Let stand about 5 minutes.",
            "Divide rice among 2 bowls or plates, and top with chicken mixture. Sprinkle with togarashi.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Japanese-Chicken-Don"
    />
  );
}

export default JapaneseChickenDonScreen;
