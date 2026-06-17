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
  GamjaJorimKoreanBraisedPotatoesScreen,
  GeneralTsosChickenScreen,
  GranolaScreen,
  HelloIssuesScreen,
  HelloWorldScreen,
  HomeScreen,
  KoreanLettuceWrapsScreen,
  LemonGarlicBokChoyScreen,
  MyFirstRealVibeScreen,
  NobuMisoMarinatedFishScreen,
  OnePanOrecchiettePastaScreen,
  OvenRoastedColaBraisedPulledPorkScreen,
  PostsHomeScreen,
  PrivacyPolicyScreen,
  SkagenroraScreen,
  SpaghettiBologneseScreen,
  StoveToOvenSteakScreen,
  TacosDeCarnitasScreen,
  TermsScreen,
  UsefulToolsAndCodeHomeScreen,
  YakiSortaScreen,
} from "../screens";
import FriedPotatoeAndOnionsScreen from "../screens/food/content/FriedPotatoesAndOnions";
import BeefNegimakiScreen from "../screens/food/content/BeefNegimaki";
import BeefSukiyakiRiceBowlScreen from "../screens/food/content/BeefSukiyakiRiceBowl";
import ZaatarRoastedChickenScreen from "../screens/food/content/ZaatarRoastedChicken";
import KungPaoChickenScreen from "../screens/food/content/KungPaoChicken";
import MisoGarlicCauliflowerBitesScreen from "../screens/food/content/MisoGarlicCauliflowerBites";
import ZaatarChickenBurgersScreen from "../screens/food/content/ZaatarChickenBurgers";
import PadThaiScreen from "../screens/food/content/PadThai";
import PorkTenderloinScreen from "../screens/food/content/PorkTenderloin";
import JapaneseChickenDonScreen from "../screens/food/content/JapaneseChickenDon";
import CrispyBakedChickenFlautasScreen from "../screens/food/content/CrispyBakedChickenFlautas";
import RicePilafScreen from "../screens/food/content/RicePilaf";
import {
  ABOUT_PATH,
  BEEF_NEGIMAKI_RECIPE,
  BEEF_STIR_FRY_RECIPE,
  BEEF_SUKIYAKI_RICE_BOWL_RECIPE,
  BEER_BATTERED_FISH_RECIPE,
  BLACK_BEAN_FLAUTAS_RECIPE,
  BRAISED_CHICKEN_RECIPE,
  CAULIFLOWER_HOT_WINGS_RECIPE,
  CHICKEN_MARSALA_RECIPE,
  CHICKEN_TIKKA_MASALA_RECIPE,
  CODE_HOME_PATH,
  CREAMY_CHICKEN_RECIPE,
  CRISPY_BAKED_CHICKEN_FLAUTAS_RECIPE,
  FOOD_HOME_PATH,
  FRIED_CHICKEN_NUGGETS_RECIPE,
  FRIED_POTATOES_AND_ONNIONS_RECIPE,
  GAMJA_JORIM_KOREAN_BRAISED_POTATOES_RECIPE,
  GENERAL_TSOS_CHICKEN_RECIPE,
  GRANOLA_RECIPE,
  HELLO_ISSUES_POST,
  HELLO_WORLD_POST,
  JAPANESE_CHICKEN_DON_RECIPE,
  KOREAN_LETTUCE_WRAPS_RECIPE,
  KUNG_PAO_CHICKEN_RECIPE,
  LEMON_GARLIC_BOK_CHOY_RECIPE,
  MISO_GARLIC_CAULIFLOWER_BITES_RECIPE,
  MY_FIRST_REAL_VIBE_POST,
  NOBO_MISO_MARINATED_FISH_RECIPE,
  ONE_PAN_ORECCHIETTE_PASTA_RECIPE,
  OVEN_ROASTED_COLA_BRAISED_PULLED_PORK_RECIPE,
  PAD_THAI_RECIPE,
  PORK_TENDERLOIN_RECIPE,
  POSTS_HOME_PATH,
  PRIVACY_PATH,
  RICE_PILAF_RECIPE,
  SKAGENRORA_RECIPE,
  SPAGHETTI_BOLOGNESE_RECIPE,
  STOVE_TO_OVEN_STEAK_RECIPE,
  TACOS_DE_CARNITAS_RECIPE,
  TERMS_PATH,
  USEFUL_TOOLS_AND_CODE_HOME_PATH,
  YAKI_SORTA_RECIPE,
  ZAATAR_CHICKEN_BURGERS_RECIPE,
  ZAATAR_ROASTED_CHICKEN_RECIPE,
} from "./paths";

export * from "./paths";
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
    path: USEFUL_TOOLS_AND_CODE_HOME_PATH,
    element: <UsefulToolsAndCodeHomeScreen />,
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
    path: HELLO_ISSUES_POST,
    element: <HelloIssuesScreen />,
  },
  {
    path: HELLO_WORLD_POST,
    element: <HelloWorldScreen />,
  },
  {
    path: MY_FIRST_REAL_VIBE_POST,
    element: <MyFirstRealVibeScreen />,
  },
  // NEW_USEFUL_TOOL: Useful tools and code section of routes... too.
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
    path: CRISPY_BAKED_CHICKEN_FLAUTAS_RECIPE,
    element: <CrispyBakedChickenFlautasScreen />,
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
    path: GAMJA_JORIM_KOREAN_BRAISED_POTATOES_RECIPE,
    element: <GamjaJorimKoreanBraisedPotatoesScreen />,
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
    path: JAPANESE_CHICKEN_DON_RECIPE,
    element: <JapaneseChickenDonScreen />,
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
    path: OVEN_ROASTED_COLA_BRAISED_PULLED_PORK_RECIPE,
    element: <OvenRoastedColaBraisedPulledPorkScreen />,
  },
  {
    path: PAD_THAI_RECIPE,
    element: <PadThaiScreen />,
  },
  {
    path: PORK_TENDERLOIN_RECIPE,
    element: <PorkTenderloinScreen />,
  },
  {
    path: RICE_PILAF_RECIPE,
    element: <RicePilafScreen />,
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
    path: STOVE_TO_OVEN_STEAK_RECIPE,
    element: <StoveToOvenSteakScreen />,
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
