import { recipeData, recipes } from "./recipes";

describe("recipeData", () => {
  test("contains valid recipe records", () => {
    const paths = new Set<string>();
    const titles = new Set<string>();

    recipeData.forEach((recipe) => {
      expect(recipe.title.trim()).not.toBe("");
      expect(titles.has(recipe.title)).toBe(false);
      titles.add(recipe.title);

      expect(recipe.path).toMatch(/^\/food\/[a-z0-9-]+$/);
      expect(paths.has(recipe.path)).toBe(false);
      paths.add(recipe.path);

      expect(recipe.tags.length).toBeGreaterThan(0);
      recipe.tags.forEach((tag) => {
        expect(tag.trim()).not.toBe("");
      });

      expect(recipe.ingredientSections.length).toBeGreaterThan(0);
      recipe.ingredientSections.forEach((section) => {
        expect(section.title.trim()).not.toBe("");
        expect(section.items.length).toBeGreaterThan(0);
        section.items.forEach((item) => {
          expect(item.description.trim()).not.toBe("");
        });
      });

      expect(recipe.steps.length).toBeGreaterThan(0);
      recipe.steps.forEach((step) => {
        expect(step.trim()).not.toBe("");
      });
    });
  });

  test("builds route summaries from recipe data", () => {
    expect(recipes).toHaveLength(recipeData.length);

    recipeData.forEach((recipe) => {
      expect(recipes).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            path: recipe.path,
            tags: recipe.tags,
            title: recipe.title,
          }),
        ])
      );
    });
  });
});
