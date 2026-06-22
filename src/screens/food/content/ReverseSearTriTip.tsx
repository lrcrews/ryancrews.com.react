import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function ReverseSearTriTipScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1+",
              description: "pound tri tip roast or steak, room temperature",
            },
            {
              count: "1",
              description: "teaspoon salt, kosher or sea salt is best",
            },
            {
              count: "2",
              description: "tablespoons ghee or unsalted grass-fed butter",
            },
            {
              count: "3",
              description: "large cloves garlic, smashed",
            },
            {
              count: "2",
              description: "sprigs fresh rosemary",
            },
          ]}
          title="Main Ingredients"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Preheat oven to 250°F.",
            "Place tri tip on a rack atop a large baking sheet. Season generously with salt.",
            "Transfer the baking sheet to the oven and cook the tri tip until the internal temperature is 10-15°F below your desired doneness. Use a reliable digital instant read thermometer for best results. (Rare: 100-105°F, Medium-rare: 110-115°F,Medium: 120-125°F, Medium-well: 130-135°F, Well: 140-145°F)",
            "Heat a large cast iron skillet over high heat until very hot, almost smoking.",
            "Add the butter or ghee and swirl it around the pan.",
            "Place the smashed garlic, rosemary sprigs, and tri tip into the pan.",
            "Sear the steak for 1-2 minutes until golden brown and crispy on the bottom. Tilt the skillet while it cooks and spoon the butter, garlic, and rosemary over top of the tri tip.",
            "Flip the steak over and sear on the other side for another 1-2 minutes, continuing to spoon the butter mixture over top.",
            "Remove the tri tip from the pan and transfer to a cutting board. Cover loosely with foil and let rest for at least 5 minutes, preferably 10.",
            "Slice thinly against the grain on the bias and serve as desired.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.runningtothekitchen.com/reverse-sear-tri-tip/#wprm-recipe-container-35503"
      preparation={preparation()}
      title="Reverse Sear Tri Tip"
    />
  );
}

export default ReverseSearTriTipScreen;
