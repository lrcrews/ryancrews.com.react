import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function PorkTenderloinScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "pound whole pork tenderloin",
            },
            {
              count: "1",
              description: "lime, zested and juiced",
            },
            {
              count: "1/2",
              description: "cup lime juice",
            },
            {
              count: "1/4",
              description: "cup maple syrup",
            },
            {
              count: "1",
              description: "chipotle pepper in adobo sauce, chopped",
            },
            {
              count: "1.5",
              description: "teaspoons kosher salt",
            },
            {
              count: "1/2",
              description: "teaspoon garlic powder",
            },
            {
              count: "1",
              description: "teaspoon vegetable oil",
            },
            {
              count: "1",
              description: "tablespoon chopped fresh cilantro (for serving)",
            },
          ]}
          title="Pork Tenderloin"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Trim the pork tenderloin of any excess fat and silver skin.",
            "Put the lime zest, lime juice, honey, salt, and garlic powder in a small, lidded jar and shake to combine. Pour half of this marinade into a 1-gallon zip-top bag, add the chipotle pepper, and slosh around to combine.",
            "Add the pork tenderloin to the bag and seal, removing as much air as possible, and place in a container to catch any leaks. Marinate in the refrigerator for 6 to 24 hours, flipping the bag halfway through. Cover the jar with the remaining marinade and refrigerate until ready to use.",
            "Remove the tenderloin to a plate and discard the bag and marinade. Allow the tenderloin to sit at room temperature while preheating oven to 425°F. Remove the reserved marinade from the refrigerator.",
            "Brush the wire rack of an oven tray with vegetable oil. Place the tenderloin in the center of the rack/tray. Switch oven to hight broil and cook until the tenderloin reaches an internal temperature of 140ºF, turning every 2 minutes, about 14 to 18 minutes total.",
            "Remove the tenderloin from the grill and place on a large piece of heavy-duty aluminum foil folded at the edges to create a basket, and pour on the reserved marinade. Wrap tightly and rest for 10 minutes.",
            "Remove to a cutting board and slice. Garnish with cilantro and serve.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://altonbrown.com/recipes/grilled-pork-tenderloin/"
      preparation={preparation()}
      title="Pork Tenderloin with Chipotle Lime Marinade"
    />
  );
}

export default PorkTenderloinScreen;
