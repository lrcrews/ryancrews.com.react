import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { FOOD_HOME_PATH } from "../../routes/routes";

import { PageWrapper } from "../../shared-components";

import "./RecipeWrapper.scss";

type RecipeWrapperProps = {
  ingredients: ReactNode;
  preparation: ReactNode;
  title: string;

  originalRecipeLink?: string;
};

function RecipeWrapper(props: RecipeWrapperProps) {
  const { ingredients, originalRecipeLink, preparation, title } = props;

  return (
    <PageWrapper>
      <main className="recipe-screen">
        <h1>{title}</h1>
        <div className="content">
          <div className="ingrdients-wrapper">
            <div className="section-header large-label">INGREDIENTS</div>
            <div>{ingredients}</div>
          </div>
          <div className="preparation-wrapper">
            <div className="section-header large-label">PREPARATION</div>
            <div>{preparation}</div>
          </div>
        </div>
        {originalRecipeLink && (
          <p>
            <span className="small-label">source:</span>{" "}
            <a href={originalRecipeLink} target="_blank" rel="noreferrer">
              {originalRecipeLink}
            </a>
          </p>
        )}
        <p>
          👈 <Link to={FOOD_HOME_PATH}>Back to recipes</Link>
        </p>
      </main>
    </PageWrapper>
  );
}

export default RecipeWrapper;
