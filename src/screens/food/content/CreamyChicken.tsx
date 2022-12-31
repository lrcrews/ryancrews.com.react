import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function CreamyChickenScreen() {
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
                "tablespoon Italian seasoning (oregano with dash of rosemary and/or sage)",
            },
            {
              count: "1/2",
              description: "teaspoon crushed red pepper (more for spicier)",
            },
            {
              count: "1/2",
              description: "teaspoon salt",
            },
            {
              count: "1/2",
              description: "teaspoon black pepper",
            },
            {
              count: "1",
              description: "tablespoon butter",
            },
            {
              count: "1",
              description: "tablespoon olive oil",
            },
            {
              count: "1",
              description: "pound (bunch) asparagus (trimmed and cut in 3rds)",
            },
            {
              count: "1",
              description: "medium shallot, minced",
            },
            {
              count: "4",
              description: "cloves garlic, minced",
            },
            {
              count: "1",
              description: "cup heavy cream",
            },
            {
              count: "2",
              description: "tablespoons lemon juice",
            },
            {
              count: "1/4",
              description: "cup Parmesan cheese (optional)",
            },
            {
              count: "1/2",
              description: "French baguette",
            },
          ]}
          title="Creamy Chicken"
        />
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
            "Combine heavy cream and lemon juice (and cheese if using), store in refrigerator.",
            "Season chicken with Italian seasoning, crushed chili pepper, salt & pepper. Add 1 tablespoon olive oil to a large skillet over medium heat. Add chicken to the pan and cook for 5-6 minutes per side. Remove from skillet and set aside.",
            "Add butter, onion, and asparagus to the skillet and cook for 2-3 minutes, or until just tender.",
            "Add the garlic and cook for just under a minute.",
            "Add cream from refrigerator; stir to combine. Return chicken to the pan and simmer 3-4 minutes or until the sauce has thickened. Taste and adjust salt & pepper if needed. If the sauce is too thick, add 1/4 cup water, chicken stock or broth.",
            "Serve with bread.",
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
      preparation={preparation()}
      title="Creamy Chicken"
    />
  );
}

export default CreamyChickenScreen;
