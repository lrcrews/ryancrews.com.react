import {
  BEEF_NEGIMAKI_RECIPE,
  BEEF_STIR_FRY_RECIPE,
  BEEF_SUKIYAKI_RICE_BOWL_RECIPE,
  BEER_BATTERED_FISH_RECIPE,
  BLACK_BEAN_FLAUTAS_RECIPE,
  BRAISED_CHICKEN_RECIPE,
  CAULIFLOWER_HOT_WINGS_RECIPE,
  CHICKEN_MARSALA_RECIPE,
  CHICKEN_TIKKA_MASALA_RECIPE,
  CREAMY_CHICKEN_RECIPE,
  CRISPY_BAKED_CHICKEN_FLAUTAS_RECIPE,
  FRIED_CHICKEN_NUGGETS_RECIPE,
  FRIED_POTATOES_AND_ONNIONS_RECIPE,
  GAMJA_JORIM_KOREAN_BRAISED_POTATOES_RECIPE,
  GENERAL_TSOS_CHICKEN_RECIPE,
  GRANOLA_RECIPE,
  JAPANESE_CHICKEN_DON_RECIPE,
  KOREAN_LETTUCE_WRAPS_RECIPE,
  KUNG_PAO_CHICKEN_RECIPE,
  LEMON_GARLIC_BOK_CHOY_RECIPE,
  MISO_GARLIC_CAULIFLOWER_BITES_RECIPE,
  NOBO_MISO_MARINATED_FISH_RECIPE,
  ONE_PAN_ORECCHIETTE_PASTA_RECIPE,
  OVEN_ROASTED_COLA_BRAISED_PULLED_PORK_RECIPE,
  PAD_THAI_RECIPE,
  PORK_TENDERLOIN_RECIPE,
  RICE_PILAF_RECIPE,
  SKAGENRORA_RECIPE,
  SPAGHETTI_BOLOGNESE_RECIPE,
  STOVE_TO_OVEN_STEAK_RECIPE,
  TACOS_DE_CARNITAS_RECIPE,
  YAKI_SORTA_RECIPE,
  ZAATAR_CHICKEN_BURGERS_RECIPE,
  ZAATAR_ROASTED_CHICKEN_RECIPE,
} from "../../routes/routes";

export const QUICK_FILTER_TAGS = [
  "chicken",
  "beef",
  "pork",
  "fish",
  "vegetarian",
  "onion",
] as const;

export type RecipeTag = (typeof QUICK_FILTER_TAGS)[number];

export interface RecipeSummary {
  path: string;
  tags: RecipeTag[];
  title: string;
}

const recipeCatalog: RecipeSummary[] = [
  {
    path: BEEF_NEGIMAKI_RECIPE,
    tags: ["beef", "onion"],
    title: "Beef Negimaki (Beef and Scallion Roll)",
  },
  {
    path: BEEF_STIR_FRY_RECIPE,
    tags: ["beef", "onion"],
    title: "Beef Stir Fry",
  },
  {
    path: BEEF_SUKIYAKI_RICE_BOWL_RECIPE,
    tags: ["beef", "onion"],
    title: "Beef Sukiyaki Rice Bowl",
  },
  {
    path: BEER_BATTERED_FISH_RECIPE,
    tags: ["fish"],
    title: "Beer Battered Fish",
  },
  {
    path: BLACK_BEAN_FLAUTAS_RECIPE,
    tags: ["vegetarian"],
    title: "Black Bean Flautas",
  },
  {
    path: BRAISED_CHICKEN_RECIPE,
    tags: ["chicken"],
    title: "Braised Chicken",
  },
  {
    path: CAULIFLOWER_HOT_WINGS_RECIPE,
    tags: ["vegetarian"],
    title: "Cauliflower Hot Wings",
  },
  {
    path: CHICKEN_MARSALA_RECIPE,
    tags: ["chicken", "onion"],
    title: "Chicken Marsala",
  },
  {
    path: CHICKEN_TIKKA_MASALA_RECIPE,
    tags: ["chicken", "onion"],
    title: "Chicken Tikka Masala",
  },
  {
    path: CREAMY_CHICKEN_RECIPE,
    tags: ["chicken", "onion"],
    title: "Creamy Chicken",
  },
  {
    path: CRISPY_BAKED_CHICKEN_FLAUTAS_RECIPE,
    tags: ["chicken"],
    title: "Crispy Baked Chicken Flautas",
  },
  {
    path: FRIED_CHICKEN_NUGGETS_RECIPE,
    tags: ["chicken"],
    title: "Fried Chicken Nuggets",
  },
  {
    path: FRIED_POTATOES_AND_ONNIONS_RECIPE,
    tags: ["vegetarian", "onion"],
    title: "Fried Potatoes and Onions",
  },
  {
    path: GAMJA_JORIM_KOREAN_BRAISED_POTATOES_RECIPE,
    tags: ["vegetarian", "onion"],
    title: "Gamja Jorim (Korean Braised Potatoes)",
  },
  {
    path: GENERAL_TSOS_CHICKEN_RECIPE,
    tags: ["chicken", "onion"],
    title: "General Tso's Chicken",
  },
  {
    path: GRANOLA_RECIPE,
    tags: ["vegetarian"],
    title: "Granola",
  },
  {
    path: JAPANESE_CHICKEN_DON_RECIPE,
    tags: ["chicken", "onion"],
    title: "Japanese Chicken Don",
  },
  {
    path: KOREAN_LETTUCE_WRAPS_RECIPE,
    tags: ["vegetarian", "onion"],
    title: "Korean Lettuce Wraps",
  },
  {
    path: KUNG_PAO_CHICKEN_RECIPE,
    tags: ["chicken"],
    title: "Kung Pao Chicken",
  },
  {
    path: LEMON_GARLIC_BOK_CHOY_RECIPE,
    tags: ["vegetarian"],
    title: "Lemon Garlic Sautéed Bok Choy",
  },
  {
    path: MISO_GARLIC_CAULIFLOWER_BITES_RECIPE,
    tags: ["vegetarian", "onion"],
    title: "Miso-Garlic Cauliflower Bites",
  },
  {
    path: NOBO_MISO_MARINATED_FISH_RECIPE,
    tags: ["fish"],
    title: "Nobu's Miso-Marinated Fish",
  },
  {
    path: ONE_PAN_ORECCHIETTE_PASTA_RECIPE,
    tags: ["onion"],
    title: "One-Pan Orecchiette Pasta",
  },
  {
    path: OVEN_ROASTED_COLA_BRAISED_PULLED_PORK_RECIPE,
    tags: ["onion", "pork"],
    title: "Oven Roasted Cola-Braised Pulled Pork",
  },
  {
    path: PAD_THAI_RECIPE,
    tags: ["chicken", "fish", "onion"],
    title: "Pad Thai",
  },
  {
    path: PORK_TENDERLOIN_RECIPE,
    tags: ["pork"],
    title: "Pork Tenderloin with Chipotle Lime Marinade",
  },
  {
    path: RICE_PILAF_RECIPE,
    tags: ["onion"],
    title: "Rice Pilaf",
  },
  {
    path: SKAGENRORA_RECIPE,
    tags: ["onion"],
    title: "Skagenrora (Swedish)",
  },
  {
    path: SPAGHETTI_BOLOGNESE_RECIPE,
    tags: ["beef", "onion", "pork"],
    title: "Spaghetti Bolognese",
  },
  {
    path: STOVE_TO_OVEN_STEAK_RECIPE,
    tags: ["beef"],
    title: "Stove-to-Oven Steak",
  },
  {
    path: TACOS_DE_CARNITAS_RECIPE,
    tags: ["onion", "pork"],
    title: "Tacos de Carnitas",
  },
  {
    path: YAKI_SORTA_RECIPE,
    tags: ["onion"],
    title: "Yaki-Sorta",
  },
  {
    path: ZAATAR_CHICKEN_BURGERS_RECIPE,
    tags: ["chicken"],
    title: "Za'atar Chicken Burgers",
  },
  {
    path: ZAATAR_ROASTED_CHICKEN_RECIPE,
    tags: ["chicken"],
    title: "Za'atar Roasted Chicken",
  },
];

export const recipes = recipeCatalog.sort((leftRecipe, rightRecipe) =>
  leftRecipe.title.localeCompare(rightRecipe.title)
);
