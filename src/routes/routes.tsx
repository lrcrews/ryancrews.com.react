import { createBrowserRouter } from "react-router-dom";

import {
  AboutScreen,
  CodeHomeScreen,
  FoodHomeScreen,
  HelloWorldScreen,
  HomeScreen,
  PostsHomeScreen,
  PrivacyPolicyScreen,
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
    path: YAKI_SORTA_RECIPE,
    element: <YakiSortaScreen />,
  },
  // Catch all
  {
    path: "*",
    element: <HomeScreen />,
  },
]);
