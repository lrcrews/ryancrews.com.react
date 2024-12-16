import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function TacosDeCarnitasScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1+",
              description: "pound pork shoulder/butt cut into 2-inch cubes",
            },
            {
              count: "1/4",
              description: "cup vegetable oil",
            },
            {
              count: "1/2",
              description: "yellow onion, cut into two pieces",
            },
            {
              count: "1/2",
              description: "white onion,",
            },
            {
              count: "1/2",
              description: "bunch of cilantro",
            },
            {
              count: "4",
              description: "garlic cloves",
            },
            {
              count: "1",
              description: "medium orange, quartered",
            },
            {
              count: "1",
              description: "jalapeño, halved lengthwise",
            },
            {
              count: "1",
              description: "cinammon stick, broken in half",
            },
            {
              count: "2",
              description: "bay leaves",
            },
            {
              count: "",
              description:
                "torillas, crumbled cheese (queso fresco, cotija, or feta), salsa verde, and lime wedges for serving",
            },
          ]}
          title="Carnitas"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Adjust oven rack to middle position and preheat oven to 275°F.",
            "Cut white onion into fine dice and combine with finely chopped cilantro. Refrigerate until needed.",
            "Season pork with 1 tablespoon salt and place in a glass baking dish. The pork should fill the dish with no extra space.",
            "Squeeze orange juice over pork. Nestle squeezed orange pieces into dish.",
            "Nestle/Place the two quarters of yellow onion, four garlic cloves, jalapeño, cinnamon stick, and bay leaves around the pork. Create an even layer in the dish.",
            "Pour vegetable oil over surface. Cover dish tightly with aluminum foil and place in oven.",
            "Cook for about 3 1/2 hours. The pork should be fork-tender.",
            "Set large fine-mesh strainer over a 1-quart liquid measuring cup or bowl. Using tongs, remove and discard orange peel, onion, garlic, cinnamon stick, and bay leaves. Transfer pork, rendered fat, and cooking liquid to strainer. Let drain for 10 minutes.",
            "Transfer pork back to baking dish. You should end up with about 1/2 cup cooking liquid and 1/2 cup fat. Using a flat spoon or fat separator, skim fat from surface and add back to pork. Shred pork into large chunks with fingers or two forks. Season to taste with salt. Refrigerate until ready to serve.",
            "To serve: Preheat broiler to high with oven rack 4 inches below heating element. Broil pork until brown and crisp on surface, about 4-6 minutes. Remove pork, stir with a spoon to expose new bits to heat, and broil again until crisp, 4-6 more minutes. Watch it closely to prevent burning.",
            "Serve with tortillas, onion-cilantro mix, crumbled cheese, salsa verde, and lime wedges.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.seriouseats.com/no-waste-tacos-de-carnitas-with-salsa-verde-recipe"
      preparation={preparation()}
      title="Tacos de Carnitas"
    />
  );
}

export default TacosDeCarnitasScreen;
