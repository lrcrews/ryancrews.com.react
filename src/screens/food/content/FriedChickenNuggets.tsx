import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function FriedChickenNuggetsScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "chicken breasts",
            },
            {
              count: "2",
              description: "tablespoons dill pickle juice",
            },
            {
              count: "1/4",
              description: "teaspoon garlic powder",
            },
            {
              count: "1/4",
              description: "teaspoon paprika",
            },
            {
              count: "1/8",
              description: "teaspoon black pepper",
            },
            {
              count: "1/8",
              description: "teaspoon salt",
            },
            {
              count: "1",
              description: "tablespoon soy sauce",
            },
            {
              count: "1",
              description: "tablespoon Dijon mustard",
            },
            {
              count: "1/2",
              description: "cup (or so) corn starch",
            },
          ]}
          title="Chicken Nuggets"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Cut chicken into bite-sized pieces and set aside.",
            "Combine remaining ingredients, except corn starch, in a medium bowl and mix thouroughly.",
            "Add corn starch a few teaspoons at a time and mix. Continue doing this until you form a thick batter.",
            "Add the chicken to the batter, cover pieces thouroughly, and let set at least 30 minutes.",
            "In deep skillet heat 1/2 - 1 inch oil to 375 (pieces should barely break surface). Fry chicken a few pieces at a time (don't let touch eachother) 2 minutes on one side, then flip for 2 minutes on the other. Drain on paper towels, salt and black pepper immediately.",
            "Serve with sauces (hot sauce, ranch, etc.), and sides (corn on the cob and mashed potatoes, or spinach and sweet potatoe fries, etc.).",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Fried Chicken Nuggets"
    />
  );
}

export default FriedChickenNuggetsScreen;
