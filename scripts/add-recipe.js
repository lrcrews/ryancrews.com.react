#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT_DIR, "src/screens/food/content");
const PATHS_PATH = path.join(ROOT_DIR, "src/routes/paths.ts");
const ROUTES_PATH = path.join(ROOT_DIR, "src/routes/routes.tsx");
const SCREENS_INDEX_PATH = path.join(ROOT_DIR, "src/screens/index.ts");
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

function toConstantName(value) {
  return `${toKebabCase(value).replace(/-/g, "_").toUpperCase()}_RECIPE`;
}

function escapeString(value) {
  return JSON.stringify(value);
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
    recipe.tags.some((tag) => typeof tag !== "string" || tag.trim().length === 0)
  ) {
    throw new Error("Recipe tags must be non-empty strings.");
  }

  if (!Array.isArray(recipe.steps) || recipe.steps.length === 0) {
    throw new Error("Recipe must include at least one step.");
  }
}

function formatIngredients(sections) {
  return sections
    .map((section) => {
      const ingredients = section.items
        .map(
          (ingredient) => `            {
              count: ${escapeString(ingredient.count)},
              description: ${escapeString(ingredient.description)},
            },`,
        )
        .join("\n");

      return `        <Ingredients
          ingredients={[
${ingredients}
          ]}
          title=${escapeString(section.title)}
        />`;
    })
    .join("\n");
}

function formatSteps(steps) {
  return steps.map((step) => `            ${escapeString(step)},`).join("\n");
}

function generateRecipeScreen(recipe, names) {
  const sections = normalizeIngredientSections(recipe);
  const originalRecipeLink = recipe.sourceLink || recipe.originalRecipeLink;
  const sourceLine = originalRecipeLink
    ? `      originalRecipeLink=${escapeString(originalRecipeLink)}
`
    : "";

  return `import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import RecipeWrapper from "../RecipeWrapper";

function ${names.screenName}() {
  function ingredients() {
    return (
      <>
${formatIngredients(sections)}
      </>
    );
  }

  function preparation() {
    return (
      <>
        <Preparation
          steps={[
${formatSteps(recipe.steps)}
          ]}
        />
      </>
    );
  }

  return (
    <RecipeWrapper
      ingredients={ingredients()}
${sourceLine}      preparation={preparation()}
      title=${escapeString(recipe.title)}
    />
  );
}

export default ${names.screenName};
`;
}

function replaceAfterMarker(content, marker, insertion) {
  if (content.includes(insertion.trim())) {
    return content;
  }

  const index = content.indexOf(marker);

  if (index === -1) {
    throw new Error(`Could not find marker: ${marker}`);
  }

  const lineEnd = content.indexOf("\n", index);

  return `${content.slice(0, lineEnd + 1)}${insertion}${content.slice(
    lineEnd + 1,
  )}`;
}

function getRange(content, startMarker, endMarker) {
  const startMarkerIndex = content.indexOf(startMarker);

  if (startMarkerIndex === -1) {
    throw new Error(`Could not find marker: ${startMarker}`);
  }

  const startIndex = content.indexOf("\n", startMarkerIndex) + 1;
  const endIndex = content.indexOf(endMarker, startIndex);

  if (endIndex === -1) {
    throw new Error(`Could not find marker: ${endMarker}`);
  }

  return { startIndex, endIndex };
}

function insertSortedLines(content, startMarker, endMarker, insertion) {
  if (content.includes(insertion.trim())) {
    return content;
  }

  const { startIndex, endIndex } = getRange(content, startMarker, endMarker);
  const section = content.slice(startIndex, endIndex);
  const lines = section
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .concat(insertion.trimEnd())
    .sort((left, right) => left.trim().localeCompare(right.trim()));
  const replacement = `${lines.join("\n")}\n`;

  return `${content.slice(0, startIndex)}${replacement}${content.slice(
    endIndex,
  )}`;
}

function insertSortedNamedImportMember(content, importFrom, insertion) {
  if (content.includes(insertion.trim())) {
    return content;
  }

  const importPattern = new RegExp(
    `import \\{\\n([\\s\\S]*?)\\n\\} from ${escapeRegExp(
      JSON.stringify(importFrom),
    )};`,
  );
  const match = content.match(importPattern);

  if (!match) {
    throw new Error(`Could not find named import from ${importFrom}`);
  }

  const memberLines = match[1]
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .concat(insertion.trimEnd())
    .sort((left, right) => left.trim().localeCompare(right.trim()));
  const replacement = `import {\n${memberLines.join("\n")}\n} from ${JSON.stringify(
    importFrom,
  )};`;

  return content.replace(importPattern, replacement);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function insertSortedBlocksToEOF(
  content,
  startMarker,
  insertion,
  blockPattern,
  getKey,
) {
  if (content.includes(insertion.trim())) {
    return content;
  }

  const startMarkerIndex = content.indexOf(startMarker);

  if (startMarkerIndex === -1) {
    throw new Error(`Could not find marker: ${startMarker}`);
  }

  const startIndex = content.indexOf("\n", startMarkerIndex) + 1;
  const section = content.slice(startIndex);
  const blocks = section.match(blockPattern) || [];
  const sortedBlocks = blocks
    .filter((block) => block.trim().length > 0)
    .concat(insertion)
    .sort((left, right) => getKey(left).localeCompare(getKey(right)));

  return `${content.slice(0, startIndex)}${sortedBlocks.join("")}`;
}

function insertSortedBlocks(
  content,
  startMarker,
  endMarker,
  insertion,
  blockPattern,
  getKey,
) {
  if (content.includes(insertion.trim())) {
    return content;
  }

  const { startIndex, endIndex } = getRange(content, startMarker, endMarker);
  const section = content.slice(startIndex, endIndex);
  const blocks = section.match(blockPattern) || [];
  const sortedBlocks = blocks
    .filter((block) => block.trim().length > 0)
    .concat(insertion)
    .sort((left, right) => getKey(left).localeCompare(getKey(right)));
  const replacement = sortedBlocks.join("");

  return `${content.slice(0, startIndex)}${replacement}${content.slice(
    endIndex,
  )}`;
}

function updateRoutes(names) {
  let content = fs.readFileSync(ROUTES_PATH, "utf8");

  const screenImportInsertion = `  ${names.screenName},`;
  const pathImportInsertion = `  ${names.constantName},`;
  const routeInsertion = `  {
    path: ${names.constantName},
    element: <${names.screenName} />,
  },
`;

  content = insertSortedNamedImportMember(
    content,
    "../screens",
    screenImportInsertion,
  );
  content = insertSortedNamedImportMember(
    content,
    "./paths",
    pathImportInsertion,
  );
  content = insertSortedBlocks(
    content,
    "// NEW_RECIPES: Recipes section of routes... too.",
    "  // Catch all",
    routeInsertion,
    /  \{\n[\s\S]*?  \},\n/g,
    (block) => block.match(/path: ([A-Z0-9_]+)/)?.[1] || block,
  );

  fs.writeFileSync(ROUTES_PATH, content);
}

function updateRoutePaths(names) {
  let content = fs.readFileSync(PATHS_PATH, "utf8");

  const constantInsertion = `export const ${names.constantName} = "/food/${names.slug}";
`;

  content = insertSortedBlocksToEOF(
    content,
    "// NEW_RECIPES: Recipes section of routes",
    constantInsertion,
    /export const [A-Z0-9_]+[\s\S]*?;\n/g,
    (block) => block.match(/export const ([A-Z0-9_]+)/)?.[1] || block,
  );

  fs.writeFileSync(PATHS_PATH, content);
}

function updateScreensIndex(names) {
  let content = fs.readFileSync(SCREENS_INDEX_PATH, "utf8");

  const importInsertion = `import ${names.screenName} from "./food/content/${names.fileName}";
`;
  const exportInsertion = `  ${names.screenName},
`;

  content = insertSortedLines(
    content,
    "// NEW_RECIPE: Recipes section of imports",
    "export {",
    importInsertion,
  );
  content = insertSortedLines(
    content,
    "// NEW_RECIPE: Recipes section of screens",
    "};",
    exportInsertion,
  );

  fs.writeFileSync(SCREENS_INDEX_PATH, content);
}

function updateRecipesCatalog(recipe, names) {
  let content = fs.readFileSync(RECIPES_PATH, "utf8");

  const tags = (recipe.tags || [])
    .map((tag) => tag.trim().toLowerCase())
    .sort((left, right) => left.localeCompare(right));
  const importInsertion = `  ${names.constantName},`;
  const recipeInsertion = `  {
    path: ${names.constantName},
    tags: [${tags.map(escapeString).join(", ")}],
    title: ${escapeString(recipe.title)},
  },
`;

  content = insertSortedNamedImportMember(
    content,
    "../../routes/paths",
    importInsertion,
  );
  content = insertSortedBlocks(
    content,
    "const recipeCatalog: RecipeSummary[] = [",
    "];",
    recipeInsertion,
    /  \{\n[\s\S]*?  \},\n/g,
    (block) => block.match(/title: "([^"]+)"/)?.[1] || block,
  );

  fs.writeFileSync(RECIPES_PATH, content);
}

function main() {
  const recipe = readRecipe();
  validateRecipe(recipe);

  const names = {
    constantName: toConstantName(recipe.title),
    fileName: toPascalCase(recipe.title),
    screenName: `${toPascalCase(recipe.title)}Screen`,
    slug: toKebabCase(recipe.title),
  };
  const recipePath = path.join(CONTENT_DIR, `${names.fileName}.tsx`);

  if (fs.existsSync(recipePath)) {
    throw new Error(`Recipe screen already exists: ${recipePath}`);
  }

  fs.writeFileSync(recipePath, generateRecipeScreen(recipe, names));
  updateRoutePaths(names);
  updateRoutes(names);
  updateScreensIndex(names);
  updateRecipesCatalog(recipe, names);

  console.log(`Created ${path.relative(ROOT_DIR, recipePath)}`);
  console.log(`Added route /food/${names.slug}`);
}

main();
