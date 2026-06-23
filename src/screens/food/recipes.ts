import { createElement, type ComponentType } from "react";

import RecipeScreen from "./RecipeScreen";
import BeefNegimakiRecipe from "./data/beef-negimaki.json";
import BeefStirFryRecipe from "./data/beef-stir-fry.json";
import BeefSukiyakiRiceBowlRecipe from "./data/beef-sukiyaki-rice-bowl.json";
import BeerBatteredFishRecipe from "./data/beer-battered-fish.json";
import BlackBeanFlautasRecipe from "./data/black-bean-flautas.json";
import BraisedChickenRecipe from "./data/braised-chicken.json";
import CauliflowerHotWingsRecipe from "./data/cauliflower-hot-wings.json";
import ChickenMarsalaRecipe from "./data/chicken-marsala.json";
import ChickenTikkaMasalaRecipe from "./data/chicken-tikka-masala.json";
import ColaBraisedPorkButtRecipe from "./data/cola-braised-pork-butt.json";
import CreamyChickenRecipe from "./data/creamy-chicken.json";
import CrispyBakedChickenFlautasRecipe from "./data/crispy-baked-chicken-flautas.json";
import FriedChickenNuggetsRecipe from "./data/fried-chicken-nuggets.json";
import FriedPotatoesAndOnionsRecipe from "./data/fried-potatoes-and-onions.json";
import GamjaJorimKoreanBraisedPotatoesRecipe from "./data/gamja-jorim-korean-braised-potatoes.json";
import GeneralTsosChickenRecipe from "./data/general-tsos-chicken.json";
import GranolaRecipe from "./data/granola.json";
import JapaneseChickenDonRecipe from "./data/japanese-chicken-don.json";
import KoreanLettuceWrapsRecipe from "./data/korean-lettuce-wraps.json";
import KungPaoChickenRecipe from "./data/kung-pao-chicken.json";
import LemonGarlicBokChoyRecipe from "./data/lemon-garlic-bok-choy.json";
import MisoGarlicCauliflowerBitesRecipe from "./data/miso-garlic-cauliflower-bites.json";
import NobuMisoMarinatedFishRecipe from "./data/nobu-miso-marinated-fish.json";
import OnePanOrecchiettePastaRecipe from "./data/one-pan-orecchiette-pasta.json";
import PadThaiRecipe from "./data/pad-thai.json";
import PorkTenderloinRecipe from "./data/pork-tenderloin.json";
import ReverseSearTriTipRecipe from "./data/reverse-sear-tri-tip.json";
import RicePilafRecipe from "./data/rice-pilaf.json";
import SkagenroraRecipe from "./data/skagenrora.json";
import SpaghettiBologneseRecipe from "./data/spaghetti-bolognese.json";
import StoveToOvenSteakRecipe from "./data/stove-to-oven-steak.json";
import TacosDeCarnitasRecipe from "./data/tacos-de-carnitas.json";
import YakiSortaRecipe from "./data/yaki-sorta.json";
import ZaatarChickenBurgersRecipe from "./data/zaatar-chicken-burgers.json";
import ZaatarRoastedChickenRecipe from "./data/zaatar-roasted-chicken.json";

export const QUICK_FILTER_TAGS = [
  "chicken",
  "beef",
  "pork",
  "fish",
  "vegetarian",
  "onion",
] as const;

export type RecipeTag = string;

export type RecipeIngredient = {
  count: string;
  description: string;
};

export type RecipeIngredientSection = {
  items: RecipeIngredient[];
  title: string;
};

export type RecipeData = {
  ingredientSections: RecipeIngredientSection[];
  path: string;
  steps: string[];
  tags: RecipeTag[];
  title: string;

  sourceLink?: string;
};

export interface RecipeSummary {
  Screen: ComponentType;
  path: string;
  tags: RecipeTag[];
  title: string;
}

export const recipeData: RecipeData[] = [
  BeefNegimakiRecipe as RecipeData,
  BeefStirFryRecipe as RecipeData,
  BeefSukiyakiRiceBowlRecipe as RecipeData,
  BeerBatteredFishRecipe as RecipeData,
  BlackBeanFlautasRecipe as RecipeData,
  BraisedChickenRecipe as RecipeData,
  CauliflowerHotWingsRecipe as RecipeData,
  ChickenMarsalaRecipe as RecipeData,
  ChickenTikkaMasalaRecipe as RecipeData,
  ColaBraisedPorkButtRecipe as RecipeData,
  CreamyChickenRecipe as RecipeData,
  CrispyBakedChickenFlautasRecipe as RecipeData,
  FriedChickenNuggetsRecipe as RecipeData,
  FriedPotatoesAndOnionsRecipe as RecipeData,
  GamjaJorimKoreanBraisedPotatoesRecipe as RecipeData,
  GeneralTsosChickenRecipe as RecipeData,
  GranolaRecipe as RecipeData,
  JapaneseChickenDonRecipe as RecipeData,
  KoreanLettuceWrapsRecipe as RecipeData,
  KungPaoChickenRecipe as RecipeData,
  LemonGarlicBokChoyRecipe as RecipeData,
  MisoGarlicCauliflowerBitesRecipe as RecipeData,
  NobuMisoMarinatedFishRecipe as RecipeData,
  OnePanOrecchiettePastaRecipe as RecipeData,
  PadThaiRecipe as RecipeData,
  PorkTenderloinRecipe as RecipeData,
  ReverseSearTriTipRecipe as RecipeData,
  RicePilafRecipe as RecipeData,
  SkagenroraRecipe as RecipeData,
  SpaghettiBologneseRecipe as RecipeData,
  StoveToOvenSteakRecipe as RecipeData,
  TacosDeCarnitasRecipe as RecipeData,
  YakiSortaRecipe as RecipeData,
  ZaatarChickenBurgersRecipe as RecipeData,
  ZaatarRoastedChickenRecipe as RecipeData,
];

const recipeCatalog: RecipeSummary[] = recipeData.map((recipe) => ({
  Screen: () => createElement(RecipeScreen, { recipe }),
  path: recipe.path,
  tags: recipe.tags,
  title: recipe.title,
}));

export const recipes = [...recipeCatalog].sort((leftRecipe, rightRecipe) =>
  leftRecipe.title.localeCompare(rightRecipe.title),
);
