import Ingredients from "./components/Ingredients";
import Preparation from "./components/Preparation";
import type { RecipeData } from "./recipes";
import RecipeWrapper from "./RecipeWrapper";

type RecipeScreenProps = {
  recipe: RecipeData;
};

function RecipeScreen(props: RecipeScreenProps) {
  const { recipe } = props;

  return (
    <RecipeWrapper
      ingredients={recipe.ingredientSections.map((section) => (
        <Ingredients
          ingredients={section.items}
          key={section.title}
          title={section.title}
        />
      ))}
      originalRecipeLink={recipe.sourceLink}
      preparation={<Preparation steps={recipe.steps} />}
      title={recipe.title}
    />
  );
}

export default RecipeScreen;
