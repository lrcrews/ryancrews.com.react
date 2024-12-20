import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function BeefNegimakiScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "~1/4",
              description:
                "pound thin sliced beef (flank steak, sirloin, or similar)",
            },
            {
              count: "3",
              description: "scallions, white ends trimmed",
            },
            {
              count: "1/2",
              description: "teaspoon salt",
            },
            {
              count: "1/2",
              description: "teaspoon pepper",
            },
            {
              count: "3",
              description: "tablespoons vegetable oil",
            },
            {
              count: "1",
              description: "tablespoon minced garlic",
            },
            {
              count: "1",
              description: "tablespoon water",
            },
          ]}
          title="Beef Negimaki"
        />
        <Ingredients
          ingredients={[
            {
              count: "1/2",
              description: "cup tamari",
            },
            {
              count: "1/4",
              description: "cup brown sugar",
            },
            {
              count: "1.5",
              description: "teaspoons minced ginger",
            },
            {
              count: "1",
              description: "taspoon minced garlic",
            },
            {
              count: "1",
              description: "tablespoon honey",
            },
            {
              count: "3",
              description: "tablespoons mirin",
            },
            {
              count: "3",
              description: "teaspoon cornstarch",
            },
            {
              count: "1/4",
              description: "cup water",
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
            "Make the sauce: Combine all sauce ingredients in a small saucepan, bring to a boil, reduce heat and simmer for about 4 minutes. Remove from heat and let cool. (can be done up to 1 week in advance)",
            "Arrange beef strips vertically on a large cutting board, placing strips side by side and slightly overlapping. Cover beef with a sheet of plastic wrap, and pound using a meat mallet until beef forms a 10- x 6-inch rectangle (about ⅛ inch thick). Discard plastic wrap.",
            "Place scallions horizontally along one long edge of beef, trimming scallions to fit if needed. Roll up beef tightly around scallions to form a 10-inch-long roll; firmly press to secure the seam of roll. Sprinkle evenly with salt and pepper.",
            "Heat oil in a large nonstick skillet over medium. Place beef roll, seam side down, in oil; cook, undisturbed, until well sealed and bottom is golden brown, about 2 minutes. Turn beef roll, and continue cooking, turning occasionally, until all sides are golden brown, about 3 minutes. Carefully pour or spoon off oil in skillet. Add 1 tablespoon water to skillet, and cover immediately. Let beef rolls steam until scallions are tender, about 30 seconds.",
            "Uncover skillet, and reduce heat to medium-low. Add teriyaki sauce, and cook until slightly reduced, about 30 seconds. Baste beef roll with sauce until well coated. Transfer beef roll to a cutting board, and let rest for 5 minutes; reserve remaining sauce in skillet. Cut beef roll crosswise into 1-inch pieces, and arrange on a serving platter. Serve with reserved sauce drizzled over top or on the side for dipping.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Beef Negimaki (Beef and Scallion Roll)"
    />
  );
}

export default BeefNegimakiScreen;
