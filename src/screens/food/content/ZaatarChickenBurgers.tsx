import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function ZaatarChickenBurgersScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "~10",
              description: "ounces ground chicken",
            },
            {
              count: "2",
              description: "cloves garlic",
            },
            {
              count: "1",
              description: "tablespoon za'atar seasoning",
            },
            {
              count: "5",
              description: "tablespoons feta cheese",
            },
            {
              count: "1",
              description: "lemon",
            },
            {
              count: "1/2",
              description: "bunch of flat-leaf parsley",
            },
            {
              count: "1/4",
              description: "cup labneh or Greek yogurt (or sour cream)",
            },
            {
              count: "2",
              description: "Kaiser rolls",
            },
            {
              count: "",
              description: "salt and pepper",
            },
          ]}
          title="Burger"
        />
        <Ingredients
          ingredients={[
            {
              count: "1",
              description: "cucumber",
            },
            {
              count: "",
              description:
                "small bunch of mint (about 1/4 cup leaves when finely chopped)",
            },
          ]}
          title="Salad"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Peel and thinly slice the garlic. Zest and halve the lemon. Finely chop parsley leaves and stems. Pick the mint leaves from the stems. Remove the seeds from the cucumber and small dice.",
            "In a large bowl, combine the ground chicken, lemon zest, za'atar seasoning, and parsly. Season with salt and pepper. Gently mix to combine and form into 2 patties (about 1/2 inch thick). Transfer to a plate.",
            "In a medium pan combine the garlic and a thin layer of oil. Cook on medium heat until the garlic is golden brown, about 3-4 minutes. Remove from heat and set aside, immediately season with salt and pepper.",
            "Heat pan of reserved oil on medium-high heat. Add the patties and cook, loosely covering the pan with foil, until browned and cooked through, about 4-5 minutes per side.",
            "Make the salad: While the patties cook, in a medium bowl, combine the cucumber, mint (finely chopping just before adding), and juice from the lemon halves. Season with salt and pepper. Drizzle with olive oil and stir to combine.",
            "In a small bowl, combine the labneh and feta cheese, season with salt and pepper.",
            "Once burgers are done, transfer to a plate, leaving any browned bits in the pan. Heat pan on medium, add the buns, cut side down, and toast until golden brown, about 1-2 minutes.",
            "Place burger on buns, topping with the labneh spread, some of the relish salad, and the crispy garlic. Serve the remaining salad on the side.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Za'atar Chicken Burgers"
    />
  );
}

export default ZaatarChickenBurgersScreen;
