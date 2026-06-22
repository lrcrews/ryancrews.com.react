export enum PostCategory {
  CoolThing = "cool_thing",
  HowTo = "how_to",
  TheArt = "the_art",
  TheJob = "the_job",
  VibeCoding = "vibe_coding",
}

export function PostCategoryDisplayName(category: PostCategory) {
  return category.replaceAll("_", " ");
}

export const postCategories = Object.values(PostCategory);
