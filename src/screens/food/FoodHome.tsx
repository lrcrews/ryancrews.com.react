import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../routes/paths";
import { PageWrapper, SecondaryButton } from "../../shared-components";

import { QUICK_FILTER_TAGS, recipes } from "./recipes";

import "./FoodHome.scss";

function FoodHomeScreen() {
  const [filterValue, setFilterValue] = useState("");

  const filterTerms = Array.from(
    new Set(
      filterValue
        .split(",")
        .map((term) => term.trim().toLowerCase())
        .filter(Boolean)
    )
  );

  const displayedRecipes = recipes.filter((recipe) =>
    filterTerms.every((term) => {
      const recipeTitle = recipe.title.toLowerCase();

      return (
        recipeTitle.includes(term) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    })
  );

  function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
  }

  function handleClearFilters() {
    setFilterValue("");
  }

  function handleQuickFilterClick(tag: string) {
    if (filterTerms.includes(tag)) {
      return;
    }

    setFilterValue([...filterTerms, tag].join(", "));
  }

  return (
    <PageWrapper>
      <main>
        <p>
          👈 <Link to={HOME_PATH}>Back to home</Link>
        </p>
        <h1>Recipes</h1>
        <p>
          Very bare-bones. This is a place for me and my wife to see altered
          versions of recipes we enjoy (after-all, sometimes shallot works
          better than an onion, or sake substituted for part of the soy sauce...
          but it's hard to remember all those changes).
        </p>
        <section className="foodFilters">
          <div className="foodFilters-controls">
            <input
              aria-label="Filter recipes by tag or title"
              className="foodFilters-input"
              onChange={handleFilterChange}
              placeholder="Filter by tags or title (for example: chicken, onion)"
              type="text"
              value={filterValue}
            />
            <SecondaryButton
              className="foodFilters-clearButton"
              onClick={handleClearFilters}
            >
              Clear
            </SecondaryButton>
          </div>
          <p className="foodFilters-helpText">
            Use comma-separated filters to match recipe tags or titles.
          </p>
          <div className="foodFilters-quickActions">
            {QUICK_FILTER_TAGS.map((tag) => {
              const isActive = filterTerms.includes(tag);

              return (
                <SecondaryButton
                  aria-pressed={isActive}
                  className={`foodFilters-tagButton ${
                    isActive ? "foodFilters-tagButton-active" : ""
                  }`}
                  key={tag}
                  onClick={() => handleQuickFilterClick(tag)}
                >
                  {tag}
                </SecondaryButton>
              );
            })}
          </div>
        </section>
        <ul className="u-list-of-links">
          {/* NEW_RECIPE: like a T0D0 comment for myself so I remember where I do the manual things */}
          {displayedRecipes.map((recipe) => (
            <li key={recipe.path}>
              <Link to={recipe.path} className="large-label">
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
        {displayedRecipes.length === 0 ? (
          <p className="foodFilters-emptyState">
            No recipes match the current filter.
          </p>
        ) : null}
      </main>
    </PageWrapper>
  );
}

export default FoodHomeScreen;
