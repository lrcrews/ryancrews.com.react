import { ComponentType } from "react";

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
  REVERSE_SEAR_TRI_TIP_RECIPE,
  RICE_PILAF_RECIPE,
  SKAGENRORA_RECIPE,
  SPAGHETTI_BOLOGNESE_RECIPE,
  STOVE_TO_OVEN_STEAK_RECIPE,
  TACOS_DE_CARNITAS_RECIPE,
  YAKI_SORTA_RECIPE,
  ZAATAR_CHICKEN_BURGERS_RECIPE,
  ZAATAR_ROASTED_CHICKEN_RECIPE,
} from "../../routes/paths";
import BeefNegimakiScreen from "./content/BeefNegimaki";
import BeefStirFryScreen from "./content/BeefStirFry";
import BeefSukiyakiRiceBowlScreen from "./content/BeefSukiyakiRiceBowl";
import BeerBatteredFishScreen from "./content/BeerBatteredFish";
import BlackBeanFlautasScreen from "./content/BlackBeanFlautas";
import BraisedChickenScreen from "./content/BraisedChicken";
import CauliflowerHotWingsScreen from "./content/CauliflowerHotWings";
import ChickenMarsalaScreen from "./content/ChickenMarsala";
import ChickenTikkaMasalaScreen from "./content/ChickenTikkaMasala";
import CreamyChickenScreen from "./content/CreamyChicken";
import CrispyBakedChickenFlautasScreen from "./content/CrispyBakedChickenFlautas";
import FriedChickenNuggetsScreen from "./content/FriedChickenNuggets";
import FriedPotatoeAndOnionsScreen from "./content/FriedPotatoesAndOnions";
import GamjaJorimKoreanBraisedPotatoesScreen from "./content/GamjaJorimKoreanBraisedPotatoes";
import GeneralTsosChickenScreen from "./content/GeneralTsosChicken";
import GranolaScreen from "./content/Granola";
import JapaneseChickenDonScreen from "./content/JapaneseChickenDon";
import KoreanLettuceWrapsScreen from "./content/KoreanLettuceWraps";
import KungPaoChickenScreen from "./content/KungPaoChicken";
import LemonGarlicBokChoyScreen from "./content/LemonGarlicBokChoy";
import MisoGarlicCauliflowerBitesScreen from "./content/MisoGarlicCauliflowerBites";
import NobuMisoMarinatedFishScreen from "./content/NobuMisoMarinatedFish";
import OnePanOrecchiettePastaScreen from "./content/OnePanOrecchiettePasta";
import OvenRoastedColaBraisedPulledPorkScreen from "./content/OvenRoastedColaBraisedPulledPork";
import PadThaiScreen from "./content/PadThai";
import PorkTenderloinScreen from "./content/PorkTenderloin";
import ReverseSearTriTipScreen from "./content/ReverseSearTriTip";
import RicePilafScreen from "./content/RicePilaf";
import SkagenroraScreen from "./content/Skagenrora";
import SpaghettiBologneseScreen from "./content/SpaghettiBolognese";
import StoveToOvenSteakScreen from "./content/StoveToOvenSteak";
import TacosDeCarnitasScreen from "./content/TacosDeCarnitas";
import YakiSortaScreen from "./content/YakiSorta";
import ZaatarChickenBurgersScreen from "./content/ZaatarChickenBurgers";
import ZaatarRoastedChickenScreen from "./content/ZaatarRoastedChicken";
export const QUICK_FILTER_TAGS = [
  "chicken",
  "beef",
  "pork",
  "fish",
  "vegetarian",
  "onion",
] as const;

export type RecipeTag = string;

export interface RecipeSummary {
  Screen: ComponentType;
  path: string;
  tags: RecipeTag[];
  title: string;
}

const recipeCatalog: RecipeSummary[] = [
  {
    Screen: BeefNegimakiScreen,
    path: BEEF_NEGIMAKI_RECIPE,
    tags: [
      "beef",
      "brown sugar",
      "cornstarch",
      "garlic",
      "ginger",
      "honey",
      "mirin",
      "onion",
      "scallion",
      "tamari",
    ],
    title: "Beef Negimaki (Beef and Scallion Roll)",
  },
  {
    Screen: BeefStirFryScreen,
    path: BEEF_STIR_FRY_RECIPE,
    tags: [
      "beef",
      "bell pepper",
      "cornstarch",
      "garlic",
      "green onion",
      "hoisin",
      "miso",
      "onion",
      "serrano",
      "shaoxing wine",
      "soy sauce",
      "sugar",
    ],
    title: "Beef Stir Fry",
  },
  {
    Screen: BeefSukiyakiRiceBowlScreen,
    path: BEEF_SUKIYAKI_RICE_BOWL_RECIPE,
    tags: [
      "beef",
      "broccoli",
      "cauliflower",
      "carrot",
      "mirin",
      "onion",
      "rice",
      "sake",
      "tamari",
    ],
    title: "Beef Sukiyaki Rice Bowl",
  },
  {
    Screen: BeerBatteredFishScreen,
    path: BEER_BATTERED_FISH_RECIPE,
    tags: [
      "baking powder",
      "beer",
      "cayenne",
      "cornstarch",
      "fish",
      "flour",
      "malt vinegar",
      "old bay",
    ],
    title: "Beer Battered Fish",
  },
  {
    Screen: BlackBeanFlautasScreen,
    path: BLACK_BEAN_FLAUTAS_RECIPE,
    tags: ["black beans", "cheese", "lime", "tortillas", "vegetarian"],
    title: "Black Bean Flautas",
  },
  {
    Screen: BraisedChickenScreen,
    path: BRAISED_CHICKEN_RECIPE,
    tags: ["chicken", "chicken broth", "flour", "lemon", "oregano", "paprika"],
    title: "Braised Chicken",
  },
  {
    Screen: CauliflowerHotWingsScreen,
    path: CAULIFLOWER_HOT_WINGS_RECIPE,
    tags: [
      "buttermilk",
      "cauliflower",
      "flour",
      "garlic powder",
      "hot sauce",
      "paprika",
      "vegetarian",
    ],
    title: "Cauliflower Hot Wings",
  },
  {
    Screen: ChickenMarsalaScreen,
    path: CHICKEN_MARSALA_RECIPE,
    tags: [
      "cayenne",
      "chicken",
      "chicken stock",
      "flour",
      "garlic powder",
      "marsala wine",
      "mushroom",
      "onion",
      "oregano",
      "paprika",
      "pasta",
    ],
    title: "Chicken Marsala",
  },
  {
    Screen: ChickenTikkaMasalaScreen,
    path: CHICKEN_TIKKA_MASALA_RECIPE,
    tags: [
      "chicken",
      "chili powder",
      "coriander",
      "cumin",
      "garam masala",
      "garlic",
      "garlic powder",
      "ginger",
      "lemon",
      "onion",
      "paprika",
      "tomato sauce",
      "turmeric",
      "yogurt",
    ],
    title: "Chicken Tikka Masala",
  },
  {
    Screen: CreamyChickenScreen,
    path: CREAMY_CHICKEN_RECIPE,
    tags: [
      "asparagus",
      "baguette",
      "chicken",
      "garlic",
      "heavy cream",
      "lemon",
      "onion",
      "parmesan",
      "red pepper flakes",
      "shallot",
    ],
    title: "Creamy Chicken",
  },
  {
    Screen: CrispyBakedChickenFlautasScreen,
    path: CRISPY_BAKED_CHICKEN_FLAUTAS_RECIPE,
    tags: ["chicken", "lime", "tomato paste", "tortillas"],
    title: "Crispy Baked Chicken Flautas",
  },
  {
    Screen: FriedChickenNuggetsScreen,
    path: FRIED_CHICKEN_NUGGETS_RECIPE,
    tags: [
      "chicken",
      "cornstarch",
      "dijon mustard",
      "dill pickle juice",
      "garlic powder",
      "paprika",
      "soy sauce",
    ],
    title: "Fried Chicken Nuggets",
  },
  {
    Screen: FriedPotatoeAndOnionsScreen,
    path: FRIED_POTATOES_AND_ONNIONS_RECIPE,
    tags: ["garlic powder", "onion", "potato", "vegetarian"],
    title: "Fried Potatoes and Onions",
  },
  {
    Screen: GamjaJorimKoreanBraisedPotatoesScreen,
    path: GAMJA_JORIM_KOREAN_BRAISED_POTATOES_RECIPE,
    tags: [
      "brown sugar",
      "garlic",
      "honey",
      "mirin",
      "onion",
      "potato",
      "rice syrup",
      "scallion",
      "sesame seeds",
      "soy sauce",
      "vegetarian",
    ],
    title: "Gamja Jorim (Korean Braised Potatoes)",
  },
  {
    Screen: GeneralTsosChickenScreen,
    path: GENERAL_TSOS_CHICKEN_RECIPE,
    tags: [
      "chicken",
      "cornstarch",
      "garlic",
      "green onion",
      "ketchup",
      "onion",
      "sambal oelek",
      "snow peas",
      "soy glaze",
    ],
    title: "General Tso's Chicken",
  },
  {
    Screen: GranolaScreen,
    path: GRANOLA_RECIPE,
    tags: [
      "brown sugar",
      "coconut",
      "maple syrup",
      "oats",
      "pecans",
      "vegetarian",
    ],
    title: "Granola",
  },
  {
    Screen: JapaneseChickenDonScreen,
    path: JAPANESE_CHICKEN_DON_RECIPE,
    tags: [
      "broccoli",
      "chicken",
      "dashi",
      "mirin",
      "onion",
      "rice",
      "scallion",
      "shichimi togarashi",
      "soy sauce",
      "sugar",
    ],
    title: "Japanese Chicken Don",
  },
  {
    Screen: KoreanLettuceWrapsScreen,
    path: KOREAN_LETTUCE_WRAPS_RECIPE,
    tags: [
      "brown sugar",
      "cauliflower",
      "cornstarch",
      "ginger",
      "green onion",
      "lettuce",
      "mayo",
      "onion",
      "peanuts",
      "rice vinegar",
      "sake",
      "sambal oelek",
      "soy sauce",
      "vegetarian",
    ],
    title: "Korean Lettuce Wraps",
  },
  {
    Screen: KungPaoChickenScreen,
    path: KUNG_PAO_CHICKEN_RECIPE,
    tags: [
      "balsamic vinegar",
      "bell pepper",
      "chicken",
      "chicken broth",
      "chile-garlic sauce",
      "cornstarch",
      "ginger",
      "peanuts",
      "rice",
      "sherry",
      "soy sauce",
    ],
    title: "Kung Pao Chicken",
  },
  {
    Screen: LemonGarlicBokChoyScreen,
    path: LEMON_GARLIC_BOK_CHOY_RECIPE,
    tags: ["bok choy", "garlic", "lemon", "red pepper flakes", "vegetarian"],
    title: "Lemon Garlic Sautéed Bok Choy",
  },
  {
    Screen: MisoGarlicCauliflowerBitesScreen,
    path: MISO_GARLIC_CAULIFLOWER_BITES_RECIPE,
    tags: [
      "cauliflower",
      "chili sauce",
      "cornstarch",
      "garlic powder",
      "miso",
      "onion",
      "peanuts",
      "scallion",
      "vegetarian",
    ],
    title: "Miso-Garlic Cauliflower Bites",
  },
  {
    Screen: NobuMisoMarinatedFishScreen,
    path: NOBO_MISO_MARINATED_FISH_RECIPE,
    tags: ["fish", "mirin", "miso", "sake", "sugar"],
    title: "Nobu's Miso-Marinated Fish",
  },
  {
    Screen: OnePanOrecchiettePastaScreen,
    path: ONE_PAN_ORECCHIETTE_PASTA_RECIPE,
    tags: [
      "arugula",
      "chicken broth",
      "orecchiette",
      "onion",
      "parmesan",
      "sausage",
    ],
    title: "One-Pan Orecchiette Pasta",
  },
  {
    Screen: OvenRoastedColaBraisedPulledPorkScreen,
    path: OVEN_ROASTED_COLA_BRAISED_PULLED_PORK_RECIPE,
    tags: [
      "brown sugar",
      "chili powder",
      "dry mustard",
      "garlic powder",
      "onion",
      "oregano",
      "paprika",
      "pork",
    ],
    title: "Oven Roasted Cola-Braised Pulled Pork",
  },
  {
    Screen: PadThaiScreen,
    path: PAD_THAI_RECIPE,
    tags: [
      "bean sprouts",
      "chicken",
      "chile sauce",
      "cilantro",
      "eggs",
      "fish",
      "fish sauce",
      "garlic",
      "lime",
      "oyster sauce",
      "peanuts",
      "rice noodles",
      "scallion",
      "sugar",
    ],
    title: "Pad Thai",
  },
  {
    Screen: PorkTenderloinScreen,
    path: PORK_TENDERLOIN_RECIPE,
    tags: [
      "chipotle",
      "cilantro",
      "garlic powder",
      "lime",
      "maple syrup",
      "pork",
    ],
    title: "Pork Tenderloin with Chipotle Lime Marinade",
  },
  {
    Screen: ReverseSearTriTipScreen,
    path: REVERSE_SEAR_TRI_TIP_RECIPE,
    tags: ["beef", "garlic", "ghee", "rosemary"],
    title: "Reverse Sear Tri Tip",
  },
  {
    Screen: RicePilafScreen,
    path: RICE_PILAF_RECIPE,
    tags: [
      "almonds",
      "chicken broth",
      "garlic powder",
      "golden raisins",
      "onion",
      "paprika",
      "rice",
    ],
    title: "Rice Pilaf",
  },
  {
    Screen: SkagenroraScreen,
    path: SKAGENRORA_RECIPE,
    tags: [
      "dill",
      "hot sauce",
      "mayonnaise",
      "onion",
      "potato",
      "sour cream",
      "vegetarian",
    ],
    title: "Skagenrora (Swedish)",
  },
  {
    Screen: SpaghettiBologneseScreen,
    path: SPAGHETTI_BOLOGNESE_RECIPE,
    tags: [
      "beef",
      "carrot",
      "garlic",
      "onion",
      "pork",
      "red pepper flakes",
      "shallot",
      "tomato sauce",
    ],
    title: "Spaghetti Bolognese",
  },
  {
    Screen: StoveToOvenSteakScreen,
    path: STOVE_TO_OVEN_STEAK_RECIPE,
    tags: ["beef", "orange"],
    title: "Stove-to-Oven Steak",
  },
  {
    Screen: TacosDeCarnitasScreen,
    path: TACOS_DE_CARNITAS_RECIPE,
    tags: [
      "bay leaves",
      "cilantro",
      "cinnamon",
      "garlic",
      "jalapeño",
      "onion",
      "orange",
      "pork",
    ],
    title: "Tacos de Carnitas",
  },
  {
    Screen: YakiSortaScreen,
    path: YAKI_SORTA_RECIPE,
    tags: [
      "bell pepper",
      "cabbage",
      "carrot",
      "garlic",
      "ginger",
      "ketchup",
      "noodles",
      "onion",
      "oyster sauce",
      "sake",
      "scallion",
      "worcestershire sauce",
    ],
    title: "Yaki-Sorta",
  },
  {
    Screen: ZaatarChickenBurgersScreen,
    path: ZAATAR_CHICKEN_BURGERS_RECIPE,
    tags: [
      "chicken",
      "cucumber",
      "feta",
      "garlic",
      "kaiser rolls",
      "labneh",
      "lemon",
      "parsley",
      "yogurt",
      "za'atar",
    ],
    title: "Za'atar Chicken Burgers",
  },
  {
    Screen: ZaatarRoastedChickenScreen,
    path: ZAATAR_ROASTED_CHICKEN_RECIPE,
    tags: ["cauliflower", "chicken", "lemon", "tahini", "za'atar"],
    title: "Za'atar Roasted Chicken",
  },
];

export const recipes = [...recipeCatalog].sort((leftRecipe, rightRecipe) =>
  leftRecipe.title.localeCompare(rightRecipe.title),
);
