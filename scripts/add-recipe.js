#!/usr/bin/env node

// npm run add-recipe -- scripts/json-recipes/<recipe-name>.json

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "src/screens/food/data");
const RECIPES_PATH = path.join(ROOT_DIR, "src/screens/food/recipes.ts");

function usage() {
  console.error(`Usage: npm run add-recipe -- path/to/recipe.json

Example recipe.json:
{
  "title": "Tomato Soup",
  "tags": ["vegetarian", "onion"],
  "ingredients": [
    "2 tablespoons olive oil",
    "1 onion, diced",
    "28 ounces canned tomatoes"
  ],
  "steps": [
    "Cook the onion in olive oil until softened.",
    "Add tomatoes and simmer for 20 minutes.",
    "Blend until smooth."
  ],
  "sourceLink": "https://example.com/tomato-soup"
}

Ingredient sections are also supported:
{
  "title": "Pad Thai",
  "ingredients": [
    {
      "title": "Sauce",
      "items": [
        { "count": "1/4", "description": "cup fresh lime juice" },
        "3 tablespoons fish sauce"
      ]
    }
  ],
  "steps": ["Make the sauce.", "Cook the noodles."],
  "sourceLink": "https://example.com/pad-thai"
}`);
}

function readRecipe() {
  const inputPath = process.argv[2];

  if (!inputPath) {
    usage();
    process.exit(1);
  }

  const fullPath = path.resolve(process.cwd(), inputPath);
  const raw = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(raw);
}

function toPascalCase(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join("");
}

function toKebabCase(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
    .toLowerCase();
}

function normalizeIngredient(ingredient) {
  if (typeof ingredient === "string") {
    const match = ingredient.match(/^(\S+)\s+(.+)$/);

    return {
      count: match ? match[1] : "",
      description: match ? match[2] : ingredient,
    };
  }

  return {
    count: ingredient.count || "",
    description: ingredient.description,
  };
}

function normalizeIngredientSections(recipe) {
  if (!Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) {
    throw new Error("Recipe must include at least one ingredient.");
  }

  if (recipe.ingredients.every((ingredient) => !ingredient.items)) {
    return [
      {
        title: recipe.ingredientsTitle || recipe.title,
        items: recipe.ingredients.map(normalizeIngredient),
      },
    ];
  }

  return recipe.ingredients.map((section) => ({
    title: section.title || recipe.title,
    items: section.items.map(normalizeIngredient),
  }));
}

function validateRecipe(recipe) {
  if (!recipe.title) {
    throw new Error("Recipe must include a title.");
  }

  if (recipe.tags && !Array.isArray(recipe.tags)) {
    throw new Error("Recipe tags must be an array of strings.");
  }

  if (
    recipe.tags &&
    recipe.tags.some(
      (tag) => typeof tag !== "string" || tag.trim().length === 0,
    )
  ) {
    throw new Error("Recipe tags must be non-empty strings.");
  }

  if (!Array.isArray(recipe.steps) || recipe.steps.length === 0) {
    throw new Error("Recipe must include at least one step.");
  }
}

function toRecipeData(recipe, slug) {
  const sourceLink = recipe.sourceLink || recipe.originalRecipeLink;

  return {
    title: recipe.title,
    path: `/food/${slug}`,
    tags: (recipe.tags || [])
      .map((tag) => tag.trim().toLowerCase())
      .sort((left, right) => left.localeCompare(right)),
    ...(sourceLink ? { sourceLink } : {}),
    ingredientSections: normalizeIngredientSections(recipe),
    steps: recipe.steps,
  };
}

function insertSortedImport(content, importLine) {
  if (content.includes(importLine)) {
    return content;
  }

  const importPattern = /^import .* from "\.\/data\/.*\.json";$/gm;
  const imports = content.match(importPattern) || [];
  const sortedImports = [...imports, importLine].sort((left, right) =>
    left.localeCompare(right),
  );

  if (imports.length === 0) {
    return content.replace(
      'import RecipeScreen from "./RecipeScreen";',
      `import RecipeScreen from "./RecipeScreen";\n${importLine}`,
    );
  }

  const firstImportIndex = content.indexOf(imports[0]);
  const lastImport = imports[imports.length - 1];
  const lastImportIndex = content.indexOf(lastImport, firstImportIndex);
  const endIndex = lastImportIndex + lastImport.length;

  return `${content.slice(0, firstImportIndex)}${sortedImports.join(
    "\n",
  )}${content.slice(endIndex)}`;
}

function insertSortedRecipeDataEntry(content, entryLine) {
  if (content.includes(entryLine.trim())) {
    return content;
  }

  const startMarker = "export const recipeData: RecipeData[] = [";
  const startMarkerIndex = content.indexOf(startMarker);

  if (startMarkerIndex === -1) {
    throw new Error(`Could not find marker: ${startMarker}`);
  }

  const startIndex = content.indexOf("\n", startMarkerIndex) + 1;
  const endIndex = content.indexOf("];", startIndex);

  if (endIndex === -1) {
    throw new Error("Could not find end of recipeData.");
  }

  const entries = content
    .slice(startIndex, endIndex)
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .concat(entryLine)
    .sort((left, right) => left.trim().localeCompare(right.trim()));

  return `${content.slice(0, startIndex)}${entries.join("\n")}\n${content.slice(
    endIndex,
  )}`;
}

function updateRecipesRegistry(names) {
  let content = fs.readFileSync(RECIPES_PATH, "utf8");

  content = insertSortedImport(
    content,
    `import ${names.importName} from "./data/${names.fileName}";`,
  );
  content = insertSortedRecipeDataEntry(
    content,
    `  ${names.importName} as RecipeData,`,
  );

  fs.writeFileSync(RECIPES_PATH, content);
}

function main() {
  const recipe = readRecipe();
  validateRecipe(recipe);

  const slug = recipe.path
    ? recipe.path.split("/").filter(Boolean).pop()
    : toKebabCase(recipe.title);
  const fileName = `${slug}.json`;
  const importName = `${toPascalCase(slug)}Recipe`;
  const recipePath = path.join(DATA_DIR, fileName);

  if (fs.existsSync(recipePath)) {
    throw new Error(`Recipe data already exists: ${recipePath}`);
  }

  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(
    recipePath,
    `${JSON.stringify(toRecipeData(recipe, slug), null, 2)}\n`,
  );
  updateRecipesRegistry({ fileName, importName });

  console.log(`Created ${path.relative(ROOT_DIR, recipePath)}`);
  console.log(`Added route /food/${slug}`);
}

main();
