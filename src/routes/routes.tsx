import { createBrowserRouter } from "react-router-dom";

import {
  AboutScreen,
  BeefStirFryScreen,
  BeerBatteredFishScreen,
  BlackBeanFlautasScreen,
  BraisedChickenScreen,
  CauliflowerHotWingsScreen,
  ChickenMarsalaScreen,
  ChickenTikkaMasalaScreen,
  CodeHomeScreen,
  CreamyChickenScreen,
  FoodHomeScreen,
  FriedChickenNuggetsScreen,
  GeneralTsosChickenScreen,
  GranolaScreen,
  HelloWorldScreen,
  HomeScreen,
  KoreanLettuceWrapsScreen,
  LemonGarlicBokChoyScreen,
  NobuMisoMarinatedFishScreen,
  OnePanOrecchiettePastaScreen,
  PostsHomeScreen,
  PrivacyPolicyScreen,
  SkagenroraScreen,
  SpaghettiBologneseScreen,
  TacosDeCarnitasScreen,
  TermsScreen,
  YakiSortaScreen,
} from "../screens";
import FriedPotatoeAndOnionsScreen from "../screens/food/content/FriedPotatoesAndOnions";
import BeefNegimakiScreen from "../screens/food/content/BeefNegimaki";
import BeefSukiyakiRiceBowlScreen from "../screens/food/content/BeefSukiyakiRiceBowl";
import ZaatarRoastedChickenScreen from "../screens/food/content/ZaatarRoastedChicken";
import KungPaoChickenScreen from "../screens/food/content/KungPaoChicken";
import MisoGarlicCauliflowerBitesScreen from "../screens/food/content/MisoGarlicCauliflowerBites";
import ZaatarChickenBurgersScreen from "../screens/food/content/ZaatarChickenBurgers";

export const HOME_PATH = "/";

export const ABOUT_PATH = "/about";
export const PRIVACY_PATH = "/privacy-policy";
export const TERMS_PATH = "/terms";

export const CODE_HOME_PATH = "/code";
export const POSTS_HOME_PATH = "/code/posts";

// NEW_POST: Posts section of routes
export const HELLO_WORLD_POST = "/code/posts/hello-world";

export const FOOD_HOME_PATH = "/food";

// NEW_RECIPES: Recipes section of routes
export const BEEF_NEGIMAKI_RECIPE = "/food/beef-negimaki";
export const BEEF_STIR_FRY_RECIPE = "/food/beef-stir-fry";
export const BEEF_SUKIYAKI_RICE_BOWL_RECIPE = "/food/beef-sukiyaki-rice-bowl";
export const BEER_BATTERED_FISH_RECIPE = "/food/beer-battered-fish";
export const BLACK_BEAN_FLAUTAS_RECIPE = "/food/black-bean-flautas";
export const BRAISED_CHICKEN_RECIPE = "/food/braised-chicken";
export const CAULIFLOWER_HOT_WINGS_RECIPE = "/food/cauliflower-hot-wings";
export const CHICKEN_MARSALA_RECIPE = "/food/chicken-marsala";
export const CHICKEN_TIKKA_MASALA_RECIPE = "/food/chicken-tikka-masala";
export const CREAMY_CHICKEN_RECIPE = "/food/creamy-chicken";
export const FRIED_CHICKEN_NUGGETS_RECIPE = "/food/fried-chicken-nuggets";
export const FRIED_POTATOES_AND_ONNIONS_RECIPE =
  "/food/fried-potatoes-and-onions";
export const GENERAL_TSOS_CHICKEN_RECIPE = "/food/general-tsos-chicken";
export const GRANOLA_RECIPE = "/food/granola";
export const KOREAN_LETTUCE_WRAPS_RECIPE = "/food/korean-lettuce-wraps";
export const KUNG_PAO_CHICKEN_RECIPE = "/food/kung-pao-chicken";
export const LEMON_GARLIC_BOK_CHOY_RECIPE = "/food/lemon-garlic-bok-choy";
export const MISO_GARLIC_CAULIFLOWER_BITES_RECIPE =
  "/food/miso-garlic-cauliflower-bites";
export const NOBO_MISO_MARINATED_FISH_RECIPE = "/food/nobu-miso-marinated-fish";
export const ONE_PAN_ORECCHIETTE_PASTA_RECIPE =
  "/food/one-pan-orecchiette-pasta";
export const SKAGENRORA_RECIPE = "/food/skagenrora";
export const SPAGHETTI_BOLOGNESE_RECIPE = "/food/spaghetti-bolognese";
export const TACOS_DE_CARNITAS_RECIPE = "/food/tacos-de-carnitas";
export const YAKI_SORTA_RECIPE = "/food/yaki-sorta";
export const ZAATAR_CHICKEN_BURGERS_RECIPE = "/food/zaatar-chicken-burgers";
export const ZAATAR_ROASTED_CHICKEN_RECIPE = "/food/zaatar-roasted-chicken";

export const router = createBrowserRouter([
  {
    path: ABOUT_PATH,
    element: <AboutScreen />,
  },
  {
    path: CODE_HOME_PATH,
    element: <CodeHomeScreen />,
  },
  {
    path: FOOD_HOME_PATH,
    element: <FoodHomeScreen />,
  },
  {
    path: POSTS_HOME_PATH,
    element: <PostsHomeScreen />,
  },
  {
    path: PRIVACY_PATH,
    element: <PrivacyPolicyScreen />,
  },
  {
    path: TERMS_PATH,
    element: <TermsScreen />,
  },
  // NEW_POST: Post section of routes... too.
  {
    path: HELLO_WORLD_POST,
    element: <HelloWorldScreen />,
  },
  // NEW_RECIPES: Recipes section of routes... too.
  {
    path: BEEF_NEGIMAKI_RECIPE,
    element: <BeefNegimakiScreen />,
  },
  {
    path: BEEF_STIR_FRY_RECIPE,
    element: <BeefStirFryScreen />,
  },
  {
    path: BEEF_SUKIYAKI_RICE_BOWL_RECIPE,
    element: <BeefSukiyakiRiceBowlScreen />,
  },
  {
    path: BEER_BATTERED_FISH_RECIPE,
    element: <BeerBatteredFishScreen />,
  },
  {
    path: BLACK_BEAN_FLAUTAS_RECIPE,
    element: <BlackBeanFlautasScreen />,
  },
  {
    path: BRAISED_CHICKEN_RECIPE,
    element: <BraisedChickenScreen />,
  },
  {
    path: CAULIFLOWER_HOT_WINGS_RECIPE,
    element: <CauliflowerHotWingsScreen />,
  },
  {
    path: CHICKEN_MARSALA_RECIPE,
    element: <ChickenMarsalaScreen />,
  },
  {
    path: CHICKEN_TIKKA_MASALA_RECIPE,
    element: <ChickenTikkaMasalaScreen />,
  },
  {
    path: CREAMY_CHICKEN_RECIPE,
    element: <CreamyChickenScreen />,
  },
  {
    path: FRIED_CHICKEN_NUGGETS_RECIPE,
    element: <FriedChickenNuggetsScreen />,
  },
  {
    path: FRIED_POTATOES_AND_ONNIONS_RECIPE,
    element: <FriedPotatoeAndOnionsScreen />,
  },
  {
    path: GENERAL_TSOS_CHICKEN_RECIPE,
    element: <GeneralTsosChickenScreen />,
  },
  {
    path: GRANOLA_RECIPE,
    element: <GranolaScreen />,
  },
  {
    path: KOREAN_LETTUCE_WRAPS_RECIPE,
    element: <KoreanLettuceWrapsScreen />,
  },
  {
    path: KUNG_PAO_CHICKEN_RECIPE,
    element: <KungPaoChickenScreen />,
  },
  {
    path: LEMON_GARLIC_BOK_CHOY_RECIPE,
    element: <LemonGarlicBokChoyScreen />,
  },
  {
    path: MISO_GARLIC_CAULIFLOWER_BITES_RECIPE,
    element: <MisoGarlicCauliflowerBitesScreen />,
  },
  {
    path: NOBO_MISO_MARINATED_FISH_RECIPE,
    element: <NobuMisoMarinatedFishScreen />,
  },
  {
    path: ONE_PAN_ORECCHIETTE_PASTA_RECIPE,
    element: <OnePanOrecchiettePastaScreen />,
  },
  {
    path: SKAGENRORA_RECIPE,
    element: <SkagenroraScreen />,
  },
  {
    path: SPAGHETTI_BOLOGNESE_RECIPE,
    element: <SpaghettiBologneseScreen />,
  },
  {
    path: TACOS_DE_CARNITAS_RECIPE,
    element: <TacosDeCarnitasScreen />,
  },
  {
    path: YAKI_SORTA_RECIPE,
    element: <YakiSortaScreen />,
  },
  {
    path: ZAATAR_CHICKEN_BURGERS_RECIPE,
    element: <ZaatarChickenBurgersScreen />,
  },
  {
    path: ZAATAR_ROASTED_CHICKEN_RECIPE,
    element: <ZaatarRoastedChickenScreen />,
  },
  // Catch all
  {
    path: "*",
    element: <HomeScreen />,
  },
]);
