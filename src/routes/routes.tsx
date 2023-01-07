import { createBrowserRouter } from "react-router-dom";

import {
  AboutScreen,
  BeefStirFryScreen,
  BlackBeanFlautasScreen,
  ChickenMarsalaScreen,
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
  PostsHomeScreen,
  PrivacyPolicyScreen,
  SkagenroraScreen,
  SpaghettiBologneseScreen,
  TermsScreen,
  YakiSortaScreen,
} from "../screens";

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
export const BEEF_STIR_FRY_RECIPE = "/food/beef-stir-fry";
export const BLACK_BEAN_FLAUTAS_RECIPE = "/food/black-bean-flautas";
export const CHICKEN_MARSALA_RECIPE = "/food/chicken-marsala";
export const CREAMY_CHICKEN_RECIPE = "/food/creamy-chicken";
export const FRIED_CHICKEN_NUGGETS_RECIPE = "/food/fried-chicken-nuggets";
export const GENERAL_TSOS_CHICKEN_RECIPE = "/food/general-tsos-chicken";
export const GRANOLA_RECIPE = "/food/granola";
export const KOREAN_LETTUCE_WRAPS_RECIPE = "/food/korean-lettuce-wraps";
export const LEMON_GARLIC_BOK_CHOY_RECIPE = "/food/lemon-garlic-bok-choy";
export const NOBO_MISO_MARINATED_FISH_RECIPE = "/food/nobu-miso-marinated-fish";
export const SKAGENRORA_RECIPE = "/food/skagenrora";
export const SPAGHETTI_BOLOGNESE_RECIPE = "/food/spaghetti-bolognese";
export const YAKI_SORTA_RECIPE = "/food/yaki-sorta";

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
    path: BEEF_STIR_FRY_RECIPE,
    element: <BeefStirFryScreen />,
  },
  {
    path: BLACK_BEAN_FLAUTAS_RECIPE,
    element: <BlackBeanFlautasScreen />,
  },
  {
    path: CHICKEN_MARSALA_RECIPE,
    element: <ChickenMarsalaScreen />,
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
    path: LEMON_GARLIC_BOK_CHOY_RECIPE,
    element: <LemonGarlicBokChoyScreen />,
  },
  {
    path: NOBO_MISO_MARINATED_FISH_RECIPE,
    element: <NobuMisoMarinatedFishScreen />,
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
    path: YAKI_SORTA_RECIPE,
    element: <YakiSortaScreen />,
  },
  // Catch all
  {
    path: "*",
    element: <HomeScreen />,
  },
]);
