import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../test-utils/renderWithProviders";

import RecipeScreen from "./RecipeScreen";
import type { RecipeData } from "./recipes";

const recipe: RecipeData = {
  ingredientSections: [
    {
      title: "Sauce",
      items: [
        {
          count: "2",
          description: "tablespoons chicken broth",
        },
      ],
    },
    {
      title: "Chicken",
      items: [
        {
          count: "1",
          description: "pound chicken breast",
        },
      ],
    },
  ],
  path: "/food/test-recipe",
  sourceLink: "https://example.com/test-recipe",
  steps: ["Make the sauce.", "Cook the chicken."],
  tags: ["chicken", "soy sauce"],
  title: "Test Recipe",
};

describe("RecipeScreen", () => {
  test("renders a recipe from structured data", () => {
    renderWithProviders(<RecipeScreen recipe={recipe} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Test Recipe" })
    ).toBeInTheDocument();
    expect(screen.getByText("For the Sauce")).toBeInTheDocument();
    expect(screen.getByText("tablespoons chicken broth")).toBeInTheDocument();
    expect(screen.getByText("For the Chicken")).toBeInTheDocument();
    expect(screen.getByText("Make the sauce.")).toBeInTheDocument();
    expect(screen.getByText("Cook the chicken.")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "https://example.com/test-recipe" })
    ).toHaveAttribute("href", "https://example.com/test-recipe");
  });
});
