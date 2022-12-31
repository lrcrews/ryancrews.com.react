import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function GeneralTsosChickenScreen() {
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
              count: "1",
              description:
                "bunch green onions, green ends cut into 1/2 inch pieces",
            },
            {
              count: "1/2",
              description: "cup corn starch",
            },
            {
              count: "4",
              description: "ounces snow peas, ends and string removed",
            },
          ]}
          title="Chicken"
        />
        <Ingredients
          ingredients={[
            {
              count: "1/4",
              description: "cup ketchup",
            },
            {
              count: "2",
              description: "tablespoons soy glaze",
            },
            {
              count: "1",
              description: "tablespoon sambal oelek",
            },
            {
              count: "1",
              description: "tablespoon sesame oil",
            },
            {
              count: "4",
              description: "cloves garlic, minced",
            },
            {
              count: "",
              description: "white ends of green onions, thinly sliced",
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
            "Cut chicken into bite-sized pieces, set aside in medium bowl.",
            "Start rice.",
            "In medium pan, heat sesame oil on medium-high until hot.",
            "Add the garlic and white ends of the green onion, season with salt and pepper, cook for 1 minute (or until fragrant).",
            "Turn off heat and mix in ketchup, soy glaze, and as much sambal oelek as you'd like (more for spicier). Stir thouroughly to combine and transfer to bowl.",
            "Season chicken with salt and pepper, toss to coat. Add corn starch, toss to coat.",
            "In pan used to make sauce, add thin layer of vegetable oil and heat on medium-high until hot.",
            "Once oil is hot enough to sizzle a piece of chicken immediately, add chicken in single layer (without pieces touching) and cook 7 to 9 minutes, turning pieces occasionally.",
            "Transfer chicken to paper towels and immediately saeson with salt and pepper. Tranfer to bowl of sauce and thourgoughly coat chicken.",
            "While chicken rests heat two teaspoons of olive oil on medium-high until hot. Add snow peas, season with salt and pepper, cook 1 to 2 minutes, stirring occasionally.",
            "Plate and enjoy!",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="General Tso's Chicken"
    />
  );
}

export default GeneralTsosChickenScreen;
