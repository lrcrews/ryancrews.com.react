import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function BeefStirFryScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "1/2",
              description: "pound thinly sliced lean beef",
            },
            {
              count: "1",
              description: "red bell pepper, stemmed, cored, and thinly sliced",
            },
            {
              count: "1",
              description: "bunch green onion, roughly chopped",
            },
            {
              count: "2",
              description: "cloves garlic, finely chopped",
            },
            {
              count: "1",
              description: "serano (or similar) pepper, finely chopped",
            },
            {
              count: "1",
              description: "tablespoon vegetable oil",
            },
            {
              count: "2",
              description: "tablespoons hoison sauce",
            },
            {
              count: "1",
              description: "teaspoon white miso paste",
            },
          ]}
          title="Stir Fry"
        />
        <Ingredients
          ingredients={[
            {
              count: "2",
              description: "tablespoons soy sauce",
            },
            {
              count: "1",
              description: "tablespoon shaoxing wine or dry sherry",
            },
            {
              count: "1",
              description: "tablespoon corn starch",
            },
            {
              count: "1",
              description: "teaspoon sugar",
            },
          ]}
          title="Marinade"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Put all the ingredients for the marinade in a bowl with the beef. Mix well and set aside for 30 minutes. Start the rice.",
            "In a medium size pan over high heat, add oil, garlic, and chiles and cook for 1 minute.",
            "Add beef and cook for 3 minutes.",
            "Add pepper and green onion and cook for 2 minutes, stirring often.",
            "Turn the heat off, add hoisin sauce and miso paste, stir well until paste has dissolved. Serve stir fry with white rice.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://pickledplum.com/beef-stir-fry-recipe/#tasty-recipes-40864"
      preparation={preparation()}
      title="Beef Stir Fry"
    />
  );
}

export default BeefStirFryScreen;
