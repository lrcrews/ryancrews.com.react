import "./Ingredients.scss";

type Ingredient = {
  count: number;
  description: string;
};

type IngredientsProps = {
  ingredients: Array<Ingredient>;
  title: string;
};

function Ingredients(props: IngredientsProps) {
  const { ingredients, title } = props;

  return (
    <div className="ingredients">
      <div className="label">For the {title}</div>
      <ul className="list">
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              <div className="ingredient">
                <div>{ingredient.count}</div>
                <div>{ingredient.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ingredients;
