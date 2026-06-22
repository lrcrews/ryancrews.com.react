export enum UsefulToolCategory {
  CSSSnippet = "css_snippet",
  DebuggingNote = "debugging_note",
  Reference = "reference",
  Tool = "tool",
  UtilityMethod = "utility_method",
}

export function UsefulToolCategoryDisplayName(category: UsefulToolCategory) {
  return category.replaceAll("_", " ");
}

export const usefulToolCategories = Object.values(UsefulToolCategory);
