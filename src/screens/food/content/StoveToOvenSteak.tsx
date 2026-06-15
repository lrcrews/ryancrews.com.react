import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function StoveToOvenSteakScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "thick-cut steaks, such as ribeye, New York strip, or filet mignon, about 1 1/2 inches thick",
            },
            {
              count: "2",
              description: "tablespoons high-quality butter, divided",
            },
            {
              count: "1-2",
              description: "oranges, juiced",
            },
            {
              count: "1/4+",
              description: "cup high-smoke-point oil, such as avocado or canola oil",
            },
            {
              count: "",
              description: "Kosher salt, to taste",
            },
            {
              count: "",
              description: "Freshly cracked black pepper, to taste",
            },
          ]}
          title="Stove-to-Oven Steak"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Blot the steaks completely dry with paper towels. Salt and refrigerate the steaks uncovered for at least 1 hour and up to 24 hours. This will help the steaks develop a better crust when seared.",
            "Juice oranges and combine with equal part oil in a small bowl to create a citrus marinade. (Amount depends on size of container and size of steaks - ideally cover at least half of the steak thickness.)",
            "Stab both sides of steaks with a fork and place in a shallow dish or resealable bag. Pour the citrus marinade over the steaks, making sure to coat both sides. Marinate for 30 minutes at room temperature or up to 2 hours in the refrigerator. Flip the steaks halfway through marinating to ensure even flavor.",
            "Remove the steaks from the refrigerator 30 to 45 minutes before cooking, placing on a wire rack set over a rimmed baking sheet to allow the steaks to loose excess marinade and come to room temperature. This will help them cook more evenly.",
            "Preheat the oven to 400°F.",
            "Place a heavy oven-safe skillet, ideally cast iron, on the stovetop over medium-high heat until smoking hot.",
            "Sear the steaks undisturbed for 2-3 minutes, until a deep golden-brown crust forms.",
            "Flip the steaks and sear the other side for 2-3 minutes.",
            "Using an oven mitt, carefully transfer the hot skillet to the preheated oven.",
            "Bake until the steaks reach your 5 degree below target internal temperature. (Use instant read thermometer)",
            "Remove the steaks from the hot skillet and transfer them to a warm plate or cutting board.",
            "Place butter atop each steak and loosely tent the steaks with aluminum foil and rest for 5 to 10 minutes before serving.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Stove-to-Oven Steak"
    />
  );
}

export default StoveToOvenSteakScreen;
