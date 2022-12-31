import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function SpaghettiBologneseScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "10",
              description: "ounces ground beef, pork, or combination thereof",
            },
            {
              count: "1",
              description: "8-oz can of tomato sauce",
            },
            {
              count: "1",
              description: "medium carrot, small-diced",
            },
            {
              count: "1",
              description: "medium shallot, small-diced",
            },
            {
              count: "3",
              description: "cloves garlic, roughly chopped",
            },
            {
              count: "1/4",
              description: "cup water",
            },
            {
              count: "1",
              description:
                "tablespoon Italian seasoning (oregano with dash of rosemary and/or sage)",
            },
            {
              count: "1/2",
              description: "teaspoon crushed red pepper (more for spicier)",
            },
          ]}
          title="Spaghetti Bolognese"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Start pot of water for pasta.",
            "Add Italian seasoning to meat, mix with hands, refrigerate.",
            "Combine tomato sauce, water, and crushed red pepper (and a splash of red wine if desired). Mix thouroughly and refrigerate.",
            "In large, high-sided pan (or pot) heat a drizzle of olive oil on medium-high until hot.",
            "Add garlic, carrot, and shallot, season with salkt and black pepper. Cook, stirring frequently, 4 to 6 minutes.",
            "Add meat, season with salkt and black pepper. Cook, frequently breaking meat apart with spoon, 6 to 8 minutes.",
            "Add tomato sauce combination, bring to light boil, reduce heat to medium. Cook, stirring occasionally to get browned bits from bottom of pan, 6 to 8 minutes (or until sauce has thickened). Taste and adjust with salt and pepper as needed.",
            "While cooking sauce, add pasta to pot of water. Time based on pasta type and desired pasta texture. Cook 1 less minute than normal.",
            "Drain pasta, reserving some pasta water (in case sauce appears to dry).",
            "Transfer pasta to sauce and stir vigorously to coat pasta, 1 or 2 minutes, gradually adding water if sauce seems dry.",
            "Plate and serve with bread and/or salad.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Spaghetti Bolognese"
    />
  );
}

export default SpaghettiBologneseScreen;
