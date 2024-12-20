import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function BeefSukiyakiRiceBowlScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1/2",
              description:
                "pound (or more) thin sliced beef (flank steak, sirloin, or similar)",
            },
            {
              count: "3",
              description: "tablespoons vegetable oil, divided",
            },
            {
              count: "1/2",
              description: "head cauliflower, cut into 1-inch florets",
            },
            {
              count: "1",
              description: "medium carrot, peeled and cut into matchsticks",
            },
            {
              count: "1",
              description: "small head broccoli, cut into florets",
            },
            {
              count: "1/2",
              description: "yellow onion, finely chopped",
            },
            {
              count: "1+",
              description: "tablespoon(s) water",
            },
            {
              count: "",
              description: "steamed rice",
            },
          ]}
          title="Beef Sukiyaki"
        />
        <Ingredients
          ingredients={[
            {
              count: "1/8",
              description: "cup sake",
            },
            {
              count: "1/8",
              description: "cup mirin",
            },
            {
              count: "1/8",
              description: "cup tamari (or soy sauce)",
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
            "Make the sauce: Combine all sauce ingredients in a small saucepan, bring to a simmer over medium heat, stirring occasionally. Once simmering, remove from heat and set aside.",
            "Heat 2 tablespoons oil in a large skillet over high heat. Add beef, stirring occasionally, until browned, about 2 minutes. Transfer beef to a plate. Wipe skillet clean.",
            "Heat remaining 1 tablespoon oil in skillet over medium heat. Add cauliflower, carrot, and onion, stirring occasionally, until vegetables are tender, about 7 minutes. Add broccoli, and a small amount of oil if needed, cook stirring occasionally, until broccoli is tender, about 3 to 4 minutes. Add water to help steam the vegetables.",
            "Return beef to skillet, and toss with vegetables. Increase heat to medium-high, stirring frequently, until beef is heated through, about 1 minute.",
            "Add sukiyaki sauce; cook, stirring constantly, until vegetables and beef are well coated and sauce is slightly thickened, about 2 minutes. Remove from heat.",
            "Serve over rice.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Beef Sukiyaki Rice Bowl"
    />
  );
}

export default BeefSukiyakiRiceBowlScreen;
