#!/usr/bin/env node

// npm run add-recipe -- src/screens/food/data/<recipe-name>.json

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "src/screens/food/data");
const RECIPES_PATH = path.join(ROOT_DIR, "src/screens/food/recipes.ts");

function usage() {
  console.error(`Usage: npm run add-recipe -- src/screens/food/data/<recipe-name>.json

Recipe JSON files should already use the app data shape:
{
  "title": "Tomato Soup",
  "path": "/food/tomato-soup",
  "tags": ["vegetarian", "onion"],
  "sourceLink": "https://example.com/tomato-soup",
  "ingredientSections": [
    {
      "title": "Soup",
      "items": [
        { "count": "2", "description": "tablespoons olive oil" },
        { "count": "1", "description": "onion, diced" }
      ]
    }
  ],
  "steps": [
    "Cook the onion in olive oil until softened.",
    "Add tomatoes and simmer for 20 minutes."
  ]
}`);
}

function getRecipePath() {
  const inputPath = process.argv[2];

  if (!inputPath) {
    usage();
    process.exit(1);
  }

  const fullPath = path.resolve(process.cwd(), inputPath);

  if (!fullPath.startsWith(`${DATA_DIR}${path.sep}`)) {
    throw new Error(
      `Recipe JSON must already be in ${path.relative(ROOT_DIR, DATA_DIR)}.`,
    );
  }

  if (path.extname(fullPath) !== ".json") {
    throw new Error("Recipe file must be a JSON file.");
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Recipe data does not exist: ${fullPath}`);
  }

  return fullPath;
}

function readRecipe(recipePath) {
  const raw = fs.readFileSync(recipePath, "utf8");

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

function getSlugFromFileName(fileName) {
  return path.basename(fileName, ".json");
}

function getExpectedPath(fileName) {
  return `/food/${getSlugFromFileName(fileName)}`;
}

function validateRecipe(recipe, fileName) {
  if (!recipe.title) {
    throw new Error("Recipe must include a title.");
  }

  const expectedPath = getExpectedPath(fileName);

  if (recipe.path !== expectedPath) {
    throw new Error(`Recipe path must be ${expectedPath}.`);
  }

  if (
    !Array.isArray(recipe.tags) ||
    recipe.tags.some(
      (tag) => typeof tag !== "string" || tag.trim().length === 0,
    )
  ) {
    throw new Error("Recipe tags must be an array of non-empty strings.");
  }

  if (
    !Array.isArray(recipe.ingredientSections) ||
    recipe.ingredientSections.length === 0
  ) {
    throw new Error("Recipe must include at least one ingredient section.");
  }

  recipe.ingredientSections.forEach((section) => {
    if (!section.title || !Array.isArray(section.items)) {
      throw new Error("Ingredient sections must include a title and items.");
    }

    section.items.forEach((item) => {
      if (typeof item.count !== "string" || typeof item.description !== "string") {
        throw new Error(
          "Ingredient items must include count and description strings.",
        );
      }

      if (item.description.trim().length === 0) {
        throw new Error("Ingredient descriptions must be non-empty strings.");
      }
    });
  });

  if (!Array.isArray(recipe.steps) || recipe.steps.length === 0) {
    throw new Error("Recipe must include at least one step.");
  }

  if (
    recipe.steps.some(
      (step) => typeof step !== "string" || step.trim().length === 0,
    )
  ) {
    throw new Error("Recipe steps must be non-empty strings.");
  }
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

function validateUniqueRecipeFields(recipe, fileName) {
  const dataFiles = fs
    .readdirSync(DATA_DIR)
    .filter((candidateFileName) =>
      candidateFileName.endsWith(".json") && candidateFileName !== fileName
    );

  dataFiles.forEach((candidateFileName) => {
    const candidatePath = path.join(DATA_DIR, candidateFileName);
    const candidateRecipe = readRecipe(candidatePath);

    if (candidateRecipe.path === recipe.path) {
      throw new Error(
        `Recipe path ${recipe.path} is already used by ${candidateFileName}.`,
      );
    }

    if (candidateRecipe.title === recipe.title) {
      throw new Error(
        `Recipe title ${recipe.title} is already used by ${candidateFileName}.`,
      );
    }
  });
}

function main() {
  const recipePath = getRecipePath();
  const fileName = path.basename(recipePath);
  const slug = getSlugFromFileName(fileName);
  const importName = `${toPascalCase(slug)}Recipe`;
  const recipe = readRecipe(recipePath);

  validateRecipe(recipe, fileName);
  validateUniqueRecipeFields(recipe, fileName);
  updateRecipesRegistry({ fileName, importName });

  console.log(`Registered ${path.relative(ROOT_DIR, recipePath)}`);
  console.log(`Route available at ${recipe.path}`);
}

main();
