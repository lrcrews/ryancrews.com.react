import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function PadThaiScreen() {
  function ingredients() {
    return (
      <>
        <Ingredients
          ingredients={[
            {
              count: "8",
              description: "ounce dried flat rice noodles",
            },
            {
              count: "1/6",
              description: "cup vegetable oil",
            },
            {
              count: "2",
              description: "teaspoons chile sauce",
            },
            {
              count: "1",
              description: "tablespoon chopped garlic",
            },
            {
              count: "1/2",
              description:
                "pound (or less/more) chicken breast, cut into thin strips",
            },
            {
              count: "2",
              description: "large eggs, beaten",
            },
            {
              count: "5",
              description: "cups bean sprouts, divided",
            },
            {
              count: "6",
              description:
                "medium green onions (typically one bunch), green ends chopped into 1 inch pieces",
            },
            {
              count: "2",
              description: "tablespoons chopped unsalted dry-roasted peanuts",
            },
            {
              count: "1/4",
              description: "cup chopped fresh cilantro",
            },
            {
              count: "1",
              description: "lime, cut into wedges",
            },
          ]}
          title="Pad Thai"
        />
        <Ingredients
          ingredients={[
            {
              count: "1/4",
              description: "cup fresh lime juice",
            },
            {
              count: "1/4",
              description: "cup chicken broth",
            },
            {
              count: "3",
              description: "tablespoons fish sauce",
            },
            {
              count: "2",
              description: "tablespoons oyster sauce",
            },
            {
              count: "1",
              description: "tablespoon sugar",
            },
            {
              count: "2",
              description: "teaspoons chile sauce",
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
            "Fill a large bowl with hot tap water and place noodles in it to soak for 20 minutes.",
            "Make the sauce: In a small bowl, combine lime juice, chicken broth, fish sauce, oyster sauce, sugar, and chile sauce. Mix well and set aside.",
            "Heat a wok or large skillet over high heat and add vegetable oil. When oil is hot, stir in garlic and cook for about 10 seconds. Add chicken and cook, stirring constantly until chicken is cooked through, 3 to 5 minutes.",
            "Move everything in the wok out to the sides and pour in eggs in the center. Cook and stir eggs until firm.",
            "Add noodles to the wok and pour in the sauce. Cook, stirring constantly, until noodles are tender. Add a bit more water if needed to finish cooking noodles.",
            "Stir in 3 cups bean sprouts, green onions, and remaining chile sauce. Continuously mix until coated in sauce and heated through, about 2 minutes.",
            "Top with peanuts and fresh cilantro, with remaining 2 cups bean sprouts and lime wedges on the side.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      originalRecipeLink="https://www.allrecipes.com/recipe/109334/a-pad-thai-worth-making/"
      preparation={preparation()}
      title="Pad Thai"
    />
  );
}

export default PadThaiScreen;
